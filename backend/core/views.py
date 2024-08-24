from django.shortcuts import render,get_object_or_404,redirect
from django.urls import reverse_lazy
from .serializers import  (UserSerializer,
						   LoginSerializer,ProfileEditSerializer,
						   OTPSerializer,WithdrawalSerializer,DepositSerializer,
						   TransactionSerializer,InvestmentSerializer,AdminPlans)
from .models import Investment
from rest_framework import generics
from rest_framework.response import Response
from .models import User,OTP,Withdrawal,Transaction,Deposit
from rest_framework import status
from rest_framework.authtoken.models import Token 
# from django.contrib.auth import authenticate
from django.utils.crypto import get_random_string
from .utils import Authenticator,send_deposit_confirmation_email,send_withdrawal_confirmation_email
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.core.mail import send_mail
from rest_framework.views import APIView
from .models import AdminPlans
from .serializers import AdminPlanSerializer
class UserSignup(generics.GenericAPIView):
	serializer_class = UserSerializer

	def get_queryset(self):
		return User.objects.all()


	def post(self,request,*args,**kwargs):
		serializer = self.get_serializer_class()(data = request.data)
		if serializer.is_valid():
			user = serializer.save()
			code = get_random_string(6,allowed_chars=['0','1','2','3','4','5','6','7','8','9'])
			otp = OTP.objects.create(user = user,code = code,purpose='account-activation')
			token,_ = Token.objects.get_or_create(user = user)
			url = request.build_absolute_uri(reverse_lazy("user-activate",kwargs = {"id":otp.id}))
			print(url+"?code="+otp.code)
			body = f'''Welcome to Ex-change \n 
				click the link too activate your account \n 
				{url+"?code="+otp.code}
       			'''
			send_mail('User Activation Main',
             body,from_email='exchange7@gmail.com',recipient_list=[user.email])
			response = serializer.data 
			response['token'] = token.key
			return Response(response,status = status.HTTP_201_CREATED)
		return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
	
 
class ActivateUserView(APIView):
    def get_queryset(self):
        return OTP.objects.filter(purpose='account-activation',deleted=False)
		
	
    def get(self,request,id = None,*args,**kwargs):
        try:
            otp = self.get_queryset().get(id = id)
        except OTP.DoesNotExist:
            return redirect("https://ex-change.vercel.app/not-found")
        
        if otp.code == request.GET.get("code"):
            otp.user.is_confirmed = True 
            otp.deleted = True 
            otp.save()
            otp.user.save()
            return redirect("https://ex-change.vercel.app/dashboard")
        return redirect("https://ex-change.vercel.app/not-found")
        
            
        
        
		
     
class LoginView(generics.GenericAPIView):
	serializer_class = LoginSerializer

	


	def post(self,request,*args,**kwargs):
		serializer = self.get_serializer_class()(data = request.data)
		if serializer.is_valid():
			user = Authenticator().authenticate(request,email = serializer.data.get("email"),
				password = serializer.data.get("password"))
			if user:
				response = UserSerializer(user).data 
				token,_ = Token.objects.get_or_create(user = user)
				response['token'] = token.key
				return Response(response,status = status.HTTP_200_OK)
			return Response({'Error':"Invalide User Credentials"},status = status.HTTP_400_BAD_REQUEST)
		return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)


class UserProfileView(generics.GenericAPIView):
	serializer_class = UserSerializer
	authentication_classes = [TokenAuthentication]
	permission_classes = [IsAuthenticated]

	def get_queryset(self):
		return self.request.user 
	
	def perform_update(self, serializer,instance):
		instance.email = serializer.get("email",instance.email)
		instance.username = serializer.get("username",instance.email)
		instance.country = serializer.get("country",instance.country)
		instance.phone = serializer.get("phone",instance.phone)
		print(serializer.get("phone"))
		
		instance.save()
		return instance
	    
	def get(self,request,*args,**kwargs):
		serializer =self.get_serializer_class()(instance = self.get_queryset())
		response = serializer.data
		return Response(response,status = status.HTTP_200_OK)

	def put(self,request,*args,**kwargs):
		serializer = ProfileEditSerializer(data = request.data)
		if serializer.is_valid():
			print(serializer.data)
			self.perform_update(serializer.data,request.user)
			return Response(serializer.data,status = status.HTTP_200_OK)
		return Response(serializer.errors,status.HTTP_400_BAD_REQUEST)

class OTPView(generics.GenericAPIView):
	serializer_class = OTPSerializer
	permission_classes = [IsAuthenticated]
	authentication_classes = [TokenAuthentication]
	def get_queryset(self):
		return OTP.objects.filter(deleted = False,user = self.request.user)

	def get(self,request,code = None,*args,**kwargs):
		qs = self.get_queryset().filter(purpose = request.GET.get("purpose")).all()
		obj = get_object_or_404(qs,code = code)
		serializer = self.get_serializer_class()(instance = obj)
		obj.deleted = True
		obj.save()
		return Response(serializer.data,status = status.HTTP_200_OK)
		
	def post(self,request,*args,**kwargs):
		otp = self.get_queryset().filter(purpose= request.data.get("purpose"))
		print(otp)
		if not otp.exists():
			code = get_random_string(8)
			new_otp = OTP.objects.create(user = request.user,code = code,purpose = request.data.get("purpose"))
			body = f''' Your OTP verification code is {new_otp} with purpose of {new_otp.purpose}'''
			send_mail(
			'OTP verify from Ex chabge',
			body,
			'exhchange@gmail.com',  # From email
			[request.user.email],  # To email
			fail_silently=False,
			)
		response = {
			"detail":"OTP sent completed"
		}
		return Response(response,status=status.HTTP_201_CREATED)
class WithdrawalView(generics.GenericAPIView):
	serializer_class = WithdrawalSerializer
	permission_classes = [IsAuthenticated]
	authentication_classes = [TokenAuthentication]

	def get_queryset(self,*args,**kwargs):
		return Withdrawal.objects.filter(user = self.request.user)
	def get(self,request,*args,**kwargs):
		serializer = self.get_serializer_class()(instance = self.get_queryset(),many = True)
		return Response(serializer.data,status = status.HTTP_200_OK)
	def post(self,request,*args,**kwargs):
		context = {"request":request}
	
		serializer = self.get_serializer_class()(data = request.data,context = context)
		if serializer.is_valid():
			transaction = Transaction.objects.\
							create(user = request.user,
							pending = True,
							transaction_type = 'Withdrawal',
							amount = serializer.validated_data.get("amount"))

			obj = serializer.save(user = request.user)
			obj.transaction = transaction
			obj.save()
			request.user.total_withdraw = request.user.total_withdraw + serializer.validated_data.get("amount")
			request.user.save()
			return Response(serializer.data,status = status.HTTP_201_CREATED)
		return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
	

class DepositView(generics.GenericAPIView):
	serializer_class = DepositSerializer
	authentication_classes = [TokenAuthentication]
	permission_classes = [IsAuthenticated]

	def get_queryset(self):
		return Deposit.objects.filter(user = self.request.user)
	def get(self,request,*args,**kwargs):
		serializer = self.get_serializer_class()(instance = self.get_queryset(),many = True)
		return Response(serializer.data,status = status.HTTP_200_OK)
	def post(self,request,*args,**kwargs):
		serializer = self.get_serializer_class()(data = request.data)
		if serializer.is_valid():
			obj = serializer.save(user = request.user)
			transaction = Transaction.objects.create(user = request.user,
							transaction_type = 'Deposit',
							amount = serializer.validated_data.get("amount"))

			obj.transaction = transaction
			obj.save()
			request.user.total_deposit = request.user.total_deposit + serializer.validated_data.get("amount")
			request.user.save()
			return Response(serializer.data,status=status.HTTP_201_CREATED)
		
		return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
	
class TransactionView(generics.GenericAPIView):
	authentication_classes = [TokenAuthentication]
	permission_classes = [IsAuthenticated]
	serializer_class = TransactionSerializer

	def get_queryset(self):
		return Transaction.objects.filter(user = self.request.user)

	def get(self,request,id = None,*args, **kwargs):
		obj = self.get_queryset().all()
		serializer = self.get_serializer_class()(instance = obj,many = True)

		if id:
			obj = self.get_queryset().get(id = id)
			serializer = self.get_serializer_class()(instance = obj)

		return Response(serializer.data,status=status.HTTP_200_OK)


class ForgotPassword(generics.GenericAPIView):
	serializer_class = LoginSerializer
	authentication_classes = [TokenAuthentication]
	permission_classes = [AllowAny]
	def post(self,request,*args,**kwargs):
		email = request.data.get("email")
		password = request.data.get("password")
		if password is None:
			return Response({"error":"Password must me provided"},status = status.HTTP_400_BAD_REQUEST)
		user = get_object_or_404(User,email = email)
		user.set_password(password)
		user.save()
		return Response({"detail":"success"},status=status.HTTP_200_OK)


class InvestmentView(generics.GenericAPIView):
    serializer_class = InvestmentSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated] 
    
    def post(self,request,id = None,*args,**kwargs):
        obj = get_object_or_404(AdminPlans,id = id)
        serializer = self.get_serializer_class()(data = request.data)
        if serializer.is_valid():
            data = serializer.data
            Investment.objects.create(user = request.user, 
                                  name = data.get("name"),
                                  price =data.get("price"),
                                  plan = obj)
            trsx = Transaction.objects.create(user = request.user,pending = True,
                                       amount = data.get("price"),transaction_type='Investment')
            data.setdefault("trsx_code",trsx.trsx)
            return Response(data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
            
        
 
class PlanView(generics.GenericAPIView):
    serializer_class = AdminPlanSerializer
    
    def get(self,request,*args,**kwargs):
        obj:object = AdminPlans.objects.all()
        serializer  = self.get_serializer_class()(obj,many = True)
        return Response(serializer.data)
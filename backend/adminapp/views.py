from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from core.models import User, Transaction, OTP, Withdrawal, Deposit
from .serializers import UserSerializer, TransactionSerializer, OTPSerializer, WithdrawalSerializer, DepositSerializer
from .middleware import AdminMixin
from django.db.models import Sum
from core.models import AdminPlans,Investment
from .models import AdminUser
from core.models import AdminPlans,Investment
from core.serializers import AdminPlanSerializer,InvestmentSerializer
from django.core.mail import send_mail
from core.utils import send_withdrawal_confirmation_email,send_deposit_confirmation_email
class AdminLogin(APIView):
    def post(self,request,*args,**kwargs):
        print(request.data)
        user = get_object_or_404(AdminUser,email = request.data.get("email"))
        if user.password == request.data.get("password"):
            return Response({"token":user.token})
        return Response({"error":"invalid login credentials"},status = status.HTTP_400_BAD_REQUEST)
    
    def put(self,request,*args,**kwargs):
        if not request.data.get("password"):
            return Response({"error":"provide password credentials"},status = status.HTTP_400_BAD_REQUEST)
            
        token = request.headers.get('HTTP_ADMIN_TOKEN')
        print(token)
        admin = get_object_or_404(AdminUser,token = token)
        if not admin:
            return Response({"error":"unauhorized"},status = status.HTTP_403_FORBIDDEN)
        admin.password = request.data.get("password")
        admin.save()
        return Response({"detail":"success","token":admin.token})
        
        
class AdminHomeView(AdminMixin,GenericAPIView):
    
    def get(self,request,*args,**kwargs):
        activated_users = User.objects.filter(is_confirmed=True).count()
        non_activated_users = User.objects.filter(is_confirmed=False).count()
        total_deposits = Deposit.objects.aggregate(Sum("amount"))
        total_withdrawal = Withdrawal.objects.aggregate(Sum("amount"))
        pending_withdrawals = Withdrawal.objects.filter(transaction__pending = True).count()
        approved_withdrawals = Withdrawal.objects.filter(transaction__pending = False).count()
        
        pending_deposits = Deposit.objects.filter(transaction__pending = True).count()
        approved_deposits = Deposit.objects.filter(transaction__pending = False).count()
        plan = AdminPlans.objects.all().count()
        investment = Investment.objects.all().count()
        data = locals()
        del data['self']
        del data['request']
        
        return Response(data)
        
        
class UserListCreateView(AdminMixin,GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        users = self.get_queryset()
        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailView(AdminMixin,GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        user = self.get_object(pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(user)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        user = self.get_object(pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        user = self.get_object(pk)
        if not user:
            return Response(status=status.HTTP_404_NOT_FOUND)
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class TransactionListCreateView(AdminMixin,GenericAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get(self, request, *args, **kwargs):
        transactions = self.get_queryset()
        serializer = self.get_serializer(transactions, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TransactionDetailView(AdminMixin,GenericAPIView):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

    def get_object(self, pk):
        try:
            return Transaction.objects.get(pk=pk)
        except Transaction.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        transaction = self.get_object(pk)
        if not transaction:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(transaction)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        transaction = self.get_object(pk)
        if not transaction:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(transaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        transaction = self.get_object(pk)
        if not transaction:
            return Response(status=status.HTTP_404_NOT_FOUND)
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class OTPListCreateView(AdminMixin,GenericAPIView):
    queryset = OTP.objects.all()
    serializer_class = OTPSerializer

    def get(self, request, *args, **kwargs):
        otps = self.get_queryset()
        serializer = self.get_serializer(otps, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class OTPDetailView(AdminMixin,GenericAPIView):
    queryset = OTP.objects.all()
    serializer_class = OTPSerializer

    def get_object(self, pk):
        try:
            return OTP.objects.get(pk=pk)
        except OTP.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        otp = self.get_object(pk)
        if not otp:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(otp)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        otp = self.get_object(pk)
        if not otp:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(otp, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        otp = self.get_object(pk)
        if not otp:
            return Response(status=status.HTTP_404_NOT_FOUND)
        otp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class WithdrawalListCreateView(AdminMixin,GenericAPIView):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalSerializer

    def get(self, request, *args, **kwargs):
        withdrawals = self.get_queryset()
        serializer = self.get_serializer(withdrawals, many=True)
        return Response(serializer.data)

    def post(self ,request,id = None ,*args, **kwargs):
        print(id)
        obj = get_object_or_404(Withdrawal,id = id)
        serializer = self.get_serializer(instance=obj)
        obj.transaction.pending = False 
        obj.save()
        obj.transaction.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class WithdrawalDetailView(AdminMixin,GenericAPIView):
    queryset = Withdrawal.objects.all()
    serializer_class = WithdrawalSerializer

    def get_object(self, pk):
        try:
            return Withdrawal.objects.get(pk=pk)
        except Withdrawal.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        withdrawal = self.get_object(pk)
        if not withdrawal:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(withdrawal)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        withdrawal = self.get_object(pk)
        if not withdrawal:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(withdrawal, data=request.data)
        if serializer.is_valid():
            serializer.save()
            send_withdrawal_confirmation_email(obj.user.email,obj.user.username,obj.amount,"https://ex-change.vercel.app/dashboard")

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        withdrawal = self.get_object(pk)
        if not withdrawal:
            return Response(status=status.HTTP_404_NOT_FOUND)
        withdrawal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DepositListCreateView(AdminMixin,GenericAPIView):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer

    def get(self, request, *args, **kwargs):
        deposits = self.get_queryset()
        serializer = self.get_serializer(deposits, many=True)
        return Response(serializer.data)

    def post(self, request ,id = None, *args, **kwargs):
        obj = get_object_or_404(Deposit,id = id)
        serializer = self.get_serializer(instance=obj)
        obj.transaction.pending = False 
        obj.save()
        obj.transaction.save()
        send_deposit_confirmation_email(obj.user.email,obj.user.username,obj.amount,"https://ex-change.vercel.app/dashboard")
        return Response(serializer.data, status=status.HTTP_200_OK)

class DepositDetailView(AdminMixin,GenericAPIView):
    queryset = Deposit.objects.all()
    serializer_class = DepositSerializer

    def get_object(self, pk):
        try:
            return Deposit.objects.get(pk=pk)
        except Deposit.DoesNotExist:
            return None

    def get(self, request, pk, *args, **kwargs):
        deposit = self.get_object(pk)
        if not deposit:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(deposit)
        return Response(serializer.data)

    def put(self, request, pk, *args, **kwargs):
        deposit = self.get_object(pk)
        if not deposit:
            return Response(status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(deposit, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, *args, **kwargs):
        deposit = self.get_object(pk)
        if not deposit:
            return Response(status=status.HTTP_404_NOT_FOUND)
        deposit.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class AdminPlanView(AdminMixin,GenericAPIView):
    serializer_class = AdminPlanSerializer
    
    def get_queryset(self):
        return AdminPlans.objects.all()
    
    def get(self,request,*args,**kwargs):
        serializer = self.get_serializer_class()(self.get_queryset(),many = True)
        return Response(serializer.data)
    
    def post(self,request,*args, **kwargs):
        serializer = self.get_serializer_class()(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)
    
    def delete(self,request,id = None,*args,**kwargs):
        plan = get_object_or_404(self.get_queryset(),id = id)
        plan.delete()
        return Response({"success":"Success"})
        
        
class AdminInvesmentView(AdminMixin,GenericAPIView):
    serializer_class = InvestmentSerializer
    def get(self,request,*args,**kwargs):
        obj = Investment.objects.all()
        serializer = self.get_serializer_class()(obj,many = True)
        return Response(serializer.data)
        
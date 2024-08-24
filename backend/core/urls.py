from django.urls import path 
from .views import UserSignup,LoginView,UserProfileView,OTPView,WithdrawalView,DepositView,TransactionView,ForgotPassword,ActivateUserView,InvestmentView,PlanView
urlpatterns = [
	path("auth/register",UserSignup.as_view()),
	path('auth/login',LoginView.as_view()),
	path('auth/user-activate/<int:id>',ActivateUserView.as_view(),name = 'user-activate'),
 
	path('user/profile',UserProfileView.as_view()),
	path("otp/check/<str:code>",OTPView.as_view()),
	path("otp/get",OTPView.as_view()),
	path("account/withdraw",WithdrawalView.as_view()),
	path("account/deposit",DepositView.as_view()),
	path("plans",PlanView.as_view()),
	
	path("invest/<uuid:id>",InvestmentView.as_view()),
    path("account/transaction/<uuid:id>",TransactionView.as_view()),
    path("account/transaction",TransactionView.as_view()),
    path("set-password",ForgotPassword.as_view())


    
]
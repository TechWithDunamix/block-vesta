from django.urls import path
from .views import (
    UserListCreateView, UserDetailView,
    TransactionListCreateView, TransactionDetailView,
    OTPListCreateView, OTPDetailView,
    WithdrawalListCreateView, WithdrawalDetailView,
    DepositListCreateView, DepositDetailView,AdminHomeView,
    AdminLogin,AdminPlanView,AdminInvesmentView
)

urlpatterns = [
    path("",AdminHomeView.as_view()),
    path('login', AdminLogin.as_view()),
    
    path('users/', UserListCreateView.as_view(), name='user-list-create'),
    path('users/<uuid:pk>/', UserDetailView.as_view(), name='user-detail'),
    path('transactions/', TransactionListCreateView.as_view(), name='transaction-list-create'),
    path('transactions/<uuid:pk>/', TransactionDetailView.as_view(), name='transaction-detail'),
    path('otps/', OTPListCreateView.as_view(), name='otp-list-create'),
    path('otps/<int:pk>/', OTPDetailView.as_view(), name='otp-detail'),
    path('withdrawals/', WithdrawalListCreateView.as_view(), name='withdrawal-list-create'),
    path('withdrawals/<int:id>/', WithdrawalListCreateView.as_view(), name='withdrawal-detail'),
    path('deposits/<int:id>', DepositListCreateView.as_view(), name='deposit-list-create'),
    path('deposits/', DepositListCreateView.as_view(), name='deposit-detail'),
    path('plans/', AdminPlanView.as_view(), name='plans'),
    path('plans/<uuid:id>/', AdminPlanView.as_view(), name='plans'),
    path("investments",AdminInvesmentView.as_view())
    
    
]

from rest_framework import serializers
from core.models import User, Transaction, OTP, Withdrawal, Deposit

class UserSerializer(serializers.ModelSerializer):
    ref_by = serializers.SerializerMethodField(read_only = True)

    def get_ref_by(self,obj):
        _ref_by = User.objects.filter(user_id = obj.referal_id)
        if _ref_by.exists():
            return _ref_by.first().username
        return ""

    class Meta:
        model = User
        fields = '__all__'
        extra_kwarg = {
            "last_login":{
                "read_only":True
            }
        }


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class OTPSerializer(serializers.ModelSerializer):
    class Meta:
        model = OTP
        fields = '__all__'

class WithdrawalSerializer(serializers.ModelSerializer):
    pending = serializers.SerializerMethodField()
    
    class Meta:
        model = Withdrawal
        fields = '__all__'
    def get_pending(self,obj):
        return obj.pending
    def to_representation(self,obj,*args, **kwargs):
        data = super().to_representation(obj)
        data['user_email'] = obj.user.email
        return data      
    

class DepositSerializer(serializers.ModelSerializer):
    pending = serializers.SerializerMethodField()
    
    class Meta:
        model = Deposit
        fields = '__all__'
        
    def get_pending(self,obj):
        return obj.pending
    def to_representation(self,obj,*args, **kwargs):
        data = super().to_representation(obj)
        data['user_email'] = obj.user.email
        return data
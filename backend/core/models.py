from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager
from django.utils.crypto import get_random_string
import uuid
import json
class UserManager(BaseUserManager):
	def create_user(self,email = None,username = None,password = None,country = None,referal_id = None,phone = None,**extra):
		if not email:
			raise ValueError("Email is required")

		if not username:
			raise ValueError("Username is a required")

		if not password:
			raise ValueError("Password is required")


		user = self.model(email = email,username = username,country = country,referal_id = referal_id,phone = phone)
		user.set_password(password)
		user.save(using = self._db)
		return user 


class User(AbstractBaseUser):
	id = models.UUIDField(default = uuid.uuid4 ,primary_key = True,unique = True)
	email = models.EmailField(unique = True)
	username = models.CharField(max_length=50)
	country = models.CharField(max_length=50)
	phone = models.CharField(max_length=50)
	user_id = models.CharField(max_length= 50)
	date_joined = models.DateField(auto_now_add = True,null = True)
	referal_id = models.CharField(max_length = 50,null = True,default = None)
	is_active = models.BooleanField(default =True)
	is_confirmed = models.BooleanField(default=False)
	total_balance = models.IntegerField(default = 0)
	total_bonuses = models.IntegerField(default = 0)
	total_deposit = models.IntegerField(default = 0)
	total_withdraw = models.IntegerField(default = 0)
	USERNAME_FIELD = 'email'

	objects = UserManager()


	def __str__(self):
		return self.email
class AdminPlans(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid4,unique=True)
    name = models.CharField(max_length=50)
    price = models.IntegerField()
    duration = models.CharField(max_length=560)
    pir = models.IntegerField(default=5)
    features = models.TextField()
    def save(self,*args,**kwargs):
        self.features = json.dumps(self.features)
        super().save(*args,**kwargs)
    def get_features(self):
        return json.loads(self.features)
		
class Investment(models.Model):
	user = models.ForeignKey(User,on_delete = models.CASCADE,related_name = 'plans')
	plan = models.ForeignKey(AdminPlans, on_delete=models.CASCADE,related_name='plans')
	price = models.IntegerField()
	start = models.DateField(auto_now=True)
	end = models.DateField(auto_now=True)
	name = models.CharField(max_length = 450)
 	
	@property
	def get_user(self):
		return self.user.email



class Transaction(models.Model):
	id = models.UUIDField(default = uuid.uuid4 ,primary_key = True,unique = True)
	user = models.ForeignKey(User,on_delete = models.CASCADE,related_name = 'transaction')
	pending = models.BooleanField(default = True)
	amount = models.PositiveIntegerField(default = 0)
	transaction_type = models.CharField(max_length=50)
	date = models.DateField(auto_now_add = True)
	trsx  = models.CharField(max_length=50,default='code')
	def __str__(self):
		return f'{self.user.email} transaction on {self.date}'


	@property
	def user_name(self):
		return self.user.email
	def save(self,*args,**kwargs):
		self.trsx = get_random_string(6)
		# self.save(*args,**kwargs)
		return super().save(*args,**kwargs)
class OTP(models.Model):
	"""Model definition for OTP."""

	code = models.CharField(max_length=50)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	date = models.DateField( auto_now_add=True)
	deleted = models.BooleanField(default = False)
	purpose = models.CharField(max_length=50)
	class Meta:

		verbose_name = 'OTP'
		verbose_name_plural = 'OTPs'

	def __str__(self):
		return self.code

	def save(self, *args,**kwargs):
		return super().save(*args,**kwargs)

	

class Withdrawal(models.Model):
	name = models.CharField(max_length=50,default='Withdraw')
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	date = models.DateTimeField(auto_now=True)
	amount =models.IntegerField()
	address = models.CharField(max_length=5000,null = False,blank = False,default = 0)
	transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE,related_name='withdraw_transaction',null = True)
	class Meta:
		"""Meta definition for Withdawal."""

		verbose_name = 'Withdawal'
		verbose_name_plural = 'Withdawals'

	def __str__(self):
		return f'{self.user.email} withdrew {self.amount} on {self.date}'
	
	
	@property
	def pending(self):
		return self.transaction.pending

class Deposit(models.Model):
	name = models.CharField(max_length=50,default = 'Depost')
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	amount = models.IntegerField()
	date = models.DateField(auto_now_add=True)
	transaction = models.ForeignKey(Transaction, on_delete=models.CASCADE,related_name='deposit_transaction',null = True)

	class Meta:
		db_table = 'Deposit'
		verbose_name = 'Deposit'
		verbose_name_plural = 'Depositss'

	@property
	def pending(self):
		return self.transaction.pending


    
from .models import User,Transaction
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db import transaction as trsn

@receiver(post_save,sender = User)
def add_bonus(**kwargs):
	created = kwargs.get("created")
	if created:
		with trsn.atomic():
			user = kwargs.get('instance')
			transaction = Transaction.objects.create(user = user,pending = False,transaction_type = 'Welcome Bonus',amount =5)
			user.total_bonuses = user.total_bonuses + 5 
			user.total_balance = user.total_balance + 5
			user.save()
			print(user.referal_id)
			if user.referal_id:
				try:

					_user = User.objects.get(user_id = user.referal_id)
					print(_user)
					_user.total_balance = _user.total_balance + 5
					_user.total_bonuses = _user.total_bonuses + 5
					_user.save()
					Transaction.objects.create(user = _user,pending = False,transaction_type = 'Referal Bonus',amount = 5)
					print(user)
				except:
					print("no user as such")
					pass

		return

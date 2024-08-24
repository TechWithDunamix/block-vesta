from django.contrib.auth.backends import BaseBackend
from .models import User
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
class Authenticator(BaseBackend):

	def authenticate(self,request,email = None,password = None):
		try:
			user = User.objects.get(email = email)
		except User.DoesNotExist:
			return None 

		if user.check_password(password):
			return user 

		else:
			return None 


	def get_user(self,user_id):
		try:
			return User.objects.get(id = user_id)

		except:
			return None
		





def send_withdrawal_confirmation_email(to_email, username, amount, account_url):
    context = {
        'username': username,
        'amount': amount,
        'account_url': account_url
    }
    html_content = render_to_string('withdrawal.html', context)
    text_content = strip_tags(html_content)  # Fallback to plain text email

    email = EmailMultiAlternatives(
        'Withdrawal Confirmed',
        text_content,
        'exhchange7@gmail.com',
        [to_email]
    )
    email.attach_alternative(html_content, "text/html")
    email.send()
def send_deposit_confirmation_email(to_email, username, amount, account_url):
    context = {
        'username': username,
        'amount': amount,
        'account_url': account_url
    }
    html_content = render_to_string('deposit.html', context)
    text_content = strip_tags(html_content)  # Fallback to plain text email

    email = EmailMultiAlternatives(
        'Deposit Confirmed',
        text_content,
        'exchange7@gmail.com',
        [to_email]
    )
    email.attach_alternative(html_content, "text/html")
    email.send()
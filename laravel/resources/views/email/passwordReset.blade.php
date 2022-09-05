@component('mail::message')
# Reset password request

Click on the button bellow to change your password.

@component('mail::button', ['url' => 'http://127.0.0.1:8000/reset-password-response?token='.$token])
Reset Password
@endcomponent

Thanks,<br>
ForumWebsite
@endcomponent

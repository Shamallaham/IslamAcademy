	function validateForm()
	{
		var user=document.getElementById("username").value;
		var user=user.trim();
		var email = document.getElementById("email").value;
		var phone = document.getElementById("phone").value;
		var pw = document.getElementById("password").value; 
	
		if(user == '')
		{	document.getElementById('error').innerHTML="أدخل اسم المستخدم";
		return false;
		}
		/*var regex = /^[a-zA-Z\s]+$/;         
		 if(regex.test(user) === false)
		 {document.getElementById('error').innerHTML="اسم المستخدم غير متاح";}*/
	
	if(email == '')
		{
		document.getElementById('error').innerHTML="أدخل بريدك الإلكتروني";
		return false;
		}	
	/*var regex = /^\S+@\S+\.\S+$/;
			if(regex.test(email) === false) 
				   {document.getElementById('error').innerHTML="email not valid";}*/
				
	if(phone == '')
		{
		document.getElementById('error').innerHTML=" أدخل رقم هاتفك";
		return false;
		}				  
	/*var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
			if(regex.test(phone) === false)
			{document.getElementById('error').innerHTML="number not valid";}*/
	
		 //كلمة السر إذا فارغة
		if(pw == '')
		{
		document.getElementById('error').innerHTML="أدخل كلمة السر";
		return false;
		}
		if(pw.length < 5)
	{document.getElementById('error').innerHTML="يجب ألّا تقلّ كلمة السر عن 5 محارف";
	return false;}
	if(pw.length > 15)
	{document.getElementById('error').innerHTML="لقد تجاوزت المحارف الحد الأقصى";
	return false;}
	/*if(pw !== repassword)
	{document.getElementById('error').innerHTML="كلمة السر غير متطابقة";}*/
	}

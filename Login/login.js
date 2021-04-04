// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		// Cancel the default action, if needed
		event.preventDefault();
		// Trigger the button element with a click
		document.getElementById("myBtn").click();
	}
}
);

function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} 
	else {
		x.type = "password";
	}
}

function sbmt(){
	var pas=document.forms['loginFrm']["password"].value;
	var email=document.forms['loginFrm']["username"].value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(email.match(mailformat))
	{
		if(pas==""){
			document.getElementById('reqPass').innerHTML='*';
			alert("field must not be left blank");
			return false;
		}
	}
	else
	{
		alert("You have entered an invalid email address!");
		document.loginFrm.username.focus();
		return false;
	}
}
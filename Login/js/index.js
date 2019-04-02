 
const USERNAME = "balmandal", PASSWORD = "Sadhan@19";


 $("#login-button").click(function(event){
		 event.preventDefault();

		 var user = document.getElementById("username").value;
		 var pass = document.getElementById("password").value;

		 if(USERNAME == user && PASSWORD == pass) {
		 	document.location.href = "indexMain.html";
		 }
		 else {
		 	alert("Incorrect Username and/or Password");
		 }



	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

 
const USERNAME = "balmandal", PASSWORD = "Sadhan@19";


 $("#login-button").click(function(event){
		 event.preventDefault();

		 var user = document.getElementById("username").value;
		 var pass = document.getElementById("password").value;

		 if(USERNAME == user && PASSWORD == pass) {
			  $('form').fadeOut(500);
	 		$('.wrapper').addClass('form-success');
			 
			 setTimout(nil, 5000);
			 
		 	document.location.href = "indexMain.html";
		 }
		 else {
		 	alert("Incorrect Username and/or Password");
		 }
});

 
const USERNAME = "balmandal", PASSWORD = "Sadhan@19";


 $("#login-button").click(function(event){
		 event.preventDefault();

		 // var user = document.forms["form"]["Username"].value;
		 // var pass = document.forms["form"]["Password"].value;

		 var user = document.getElementById("username").value;
		 var pass = document.getElementById("password").value;

		 if(USERNAME == user && PASSWORD == pass) {
		 	document.location.href = "robbinsvillebalmandal.github.io/indexMain.html";
		 	// alert("here");
		 }
		 else {
		 	// error 
		 }



	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});

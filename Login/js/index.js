 
const USERNAME = "hello", PASSWORD = "1234";


 $("#login-button").click(function(event){
		 event.preventDefault();

		 // var user = document.forms["form"]["Username"].value;
		 // var pass = document.forms["form"]["Password"].value;

		 var user = document.getElementById("username").value;
		 var pass = document.getElementById("password").value;

		 if(USERNAME == user && PASSWORD == pass) {
		 	document.location.href = "indexMain.html";
		 	// alert("here");
		 }
		 else {
		 	// error 
		 }



	 
	 $('form').fadeOut(500);
	 $('.wrapper').addClass('form-success');
});
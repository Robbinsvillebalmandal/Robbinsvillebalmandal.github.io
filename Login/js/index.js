 
const USERNAME = "791684674", PASSWORD = "-814546199";


String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

 $("#login-button").click(function(event){
		 event.preventDefault();

		 var user = document.getElementById("username").value;
		 var pass = document.getElementById("password").value;

		 if(USERNAME == user.hashCode() && PASSWORD == pass.hashCode()) {
			  $('form').fadeOut(500);
	 		$('.wrapper').addClass('form-success');
			 
		 	document.location.href = "indexMain.html";
		 }
		 else {
		 	alert("Incorrect Username and/or Password");
		 }
});

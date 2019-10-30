cform.onsubmit = function() {
	var validInput = true;
	var name = document.querySelector("#fullname");
	var address = document.querySelector("#streetaddr");
	if (name.value == '') {
		document.getElementById("nameerrormsg").style.display = "block";
		validInput = false;
	}
	else {
		document.querySelector('#nameerrormsg').style.display = "none";
	}
	if (email.value == '') {
		document.getElementById("emailerrormsg").style.display = "block";
		validInput = false;
	}
	else {
		document.querySelector("#emailerrormsg").style.display = "none";
	}
	if (validInput == true)
		return true;
	return false;
}
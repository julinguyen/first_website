
function thankUser() {
	var name = document.getElementById("name").value;
	var message = "Thank you" + " " + name + "." + " " + "Your opinions about saving red pandas have been saved.";
	alert(message);
}




function toggleMenu() {
	document.getElementById("list").classList.toggle("open");
}

document.getElementById("menu").onclick = toggleMenu;
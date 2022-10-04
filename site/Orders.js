function sendEmail(){
	Email.send({
		Host : "smtp.gmail.com",
		Username : "dehome510@outlook.com",
		Password : "Josema01",
		To : 'andre.yong@outlook.com',
		From : document.getElementById("email"),
		Subject : "New Order",
		Body : "And this is the body"
	}).then(
		message => alert("Order sent")
	);
}
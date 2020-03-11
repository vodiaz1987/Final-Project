
var name = document.getElementById("Name").value;
var email = document.getElementById("Email").value;
var message = document.getElementById("Message").value;

function submitInput(){
  return  $("contact-form submit").id;
}
if (submitInput()){

  if (!name) {
    alert ("Enter your name")
  } else if (!email) {
    alert ("Enter your email")
  } else if (!message) {
    alert ("Enter a message")
  } else {
    alert ("Thank you for contact us, We will reply as soon as we can")
  }
}



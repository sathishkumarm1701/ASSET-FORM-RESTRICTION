var form = document.getElementById("my-form");
function lettersOnly(){
  var regex = /[^a-z]/gi;
  input.value=input.value.replace(regex,"");
} 
async function handleSubmit(event) {
   event.preventDefault();
  var status = document.getElementById("status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit);
function validate(){
var first=document.forms["my-form"]["fname"].value;
var last=document.forms["my-forms"]["lname"].value;

if(first ==""){
    alert("enter the name");
    return false;
}
if(!isNaN(first)){
  alert("Name should be in Character");
  return false;
}
}

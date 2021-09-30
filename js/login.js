// $(".toggle-password").click(function() {

//   $(this).toggleClass("fa-eye fa-eye-slash");
//   var input = $($(this).attr("toggle"));
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });

// show password code
const pass_field = document.querySelector('.pass-key');
const showBtn = document.querySelector('.show');
showBtn.addEventListener('click', function(){
 if(pass_field.type === "password"){
   pass_field.type = "text";
   showBtn.textContent = "HIDE";
   showBtn.style.color = "#3498db";
 }else{
   pass_field.type = "password";
   showBtn.textContent = "SHOW";
   showBtn.style.color = "#222";
 }
});

// validation

function validate() {
  // window.location.href = "../purchase.html";
  var username = document.getElementById("username").value;
  var password  = document.getElementById("password").value;
  if(username=="admin" && password=="admin")
  {
    window.location.href= "purchase/purchase.html";
  }
  else
  {
    alert("Login Failed");
  }
}


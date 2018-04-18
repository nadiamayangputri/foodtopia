// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var signupbtn = document.getElementById('signup');
var signupbtn2 = document.getElementsByClassName('create-account')[0]
var loginbtn = document.getElementById('login');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ((event.target == modal)|| (event.target == modal2)){
        modal.style.display = "none";
    }
};
signupbtn.onclick = function() {
    modal.style.display = "block";
    window.style.backgroundColor("rgba(0,0,0,0.3)")
};

signupbtn2.onclick = function() {
    modal.style.display = "block";
};

loginbtn.onclick = function() {
    modal2.style.display = "block";
};
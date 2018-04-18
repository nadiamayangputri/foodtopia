// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var btn = document.getElementById('signup');
var loginbtn = document.getElementById('login');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if ((event.target == modal)|| (event.target == modal2)){
        modal.style.display = "none";
    }
};
btn.onclick = function() {
    modal.style.display = "block";
};

loginbtn.onclick = function() {
    modal2.style.display = "block";
};
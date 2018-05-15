// "use strict";
    function handleLoginError() {

        const message = document.getElementById("messages").innerHTML;

        if (message){
            // alert('message exists'+message);
            var pos = message.indexOf("Login");
            if (pos >= 0){
                showLogin();
            }else if(message.indexOf("Signup") >= 0){
                showSignup()
            }
        }

    }
function showSignup() {
    $('#id01').modal('show');

}
function showLogin() {
    $('#id02').modal('show');

}

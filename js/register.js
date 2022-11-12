let pass = "";
let confirmPass = "";

function getPass() {
    
    pass = $("#password").val();
    if (pass==""){
        pass = "beda";
    }
    getConfirmPass();
    return pass;
}

function getConfirmPass() {
    confirmPass = $("#confirm").val();
    if (confirmPass === pass) {
        $("#confirm").css("border", "1px solid green");
        $("#password").css("border", "1px solid green");
        document.querySelector('#register').disabled = false;
    }
    else{
        $("#confirm").css("border", "1px solid red");
        $("#password").css("border", "1px solid red");
        document.querySelector('#register').disabled = true;
    }
}
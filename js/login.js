let email = "";
let password = "";

let arrAccount = [];

function getEmail() {
    email = $("#email").val();
}

function getPass() {
    password = $("#password").val();
}

async function login(){
    let response = await fetch('./account.json');
    let json = await response.json()
    arrAccount = json

    arrAccount.forEach(element => {
        if (email === element.email) {
            if (password === element.password) {
                console.log("Success");
                window.location.href = "./home.html";
            }
            else{
                $("#password").css("border", "1px solid red");
            }
            
        }
        else{
            $("#email").css("border", "1px solid red");
        }
    });

    
}
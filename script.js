


// goal compare text input for password and confirm password
const btnSubmit = document.querySelector("#submit");
const inputPassword = document.querySelector("#password");
const inputPasswordConfirm = document.querySelector("#confirmPassword");
const divError = document.querySelector(".error");
let password = "";
let passwordConfirm = "";

console.log(btnSubmit);

btnSubmit.addEventListener("click", (e) => {
    console.log("password: " + password);
    console.log("passwordConfirm: " + passwordConfirm);
    if(password != passwordConfirm && password.length >= 5 && passwordConfirm.length >= 5) {
        console.log("here");
        e.preventDefault();


        divError.textContent = "Passwords don't match";
        divError.style.color = "#ff0000";
        inputPasswordConfirm.style.border = "1px solid red";
        inputPassword.style.border = "1px solid red";
    }
    
});

inputPassword.addEventListener("input", (e) => {
    password = inputPassword.value;
    divError.textContent = "";
    inputPasswordConfirm.style.border = "1px solid #E5E7EB";
    inputPassword.style.border = "1px solid #E5E7EB";
    //console.log(pw);
});

// password is checked if user uses the second input (confirmPassword)
inputPasswordConfirm.addEventListener("input", (e) => {
    passwordConfirm = inputPasswordConfirm.value;
    divError.textContent = "";
    inputPasswordConfirm.style.border = "1px solid #E5E7EB";
    inputPassword.style.border = "1px solid #E5E7EB";
    //console.log(e.data);
});
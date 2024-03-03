


// goal compare text input for password and confirm password
const btnSubmit = document.querySelector("#submit");
const inputPassword = document.querySelector("#password");
const inputPasswordConfirm = document.querySelector("#confirmPassword");
const divError = document.querySelector(".error");
let password = "";
let passwordConfirm = "";

console.log(btnSubmit);

btnSubmit.addEventListener("click", (e) => {
    console.log(e);
    console.log("click");
    if(password != passwordConfirm && password.length != 0 && passwordConfirm.length != 0) {
        e.preventDefault();
        divError.textContent = "Passwords don't match";
        divError.style.color = "#ff0000";
        inputPasswordConfirm.style.border = "1px solid red";
        inputPassword.style.border = "1px solid red";
    }
    
});

// password is checked if user uses the second input (confirmPassword)
inputPasswordConfirm.addEventListener("input", (e) => {
    passwordConfirm += e.data;
    divError.textContent = "";
    inputPasswordConfirm.style.border = "1px solid #E5E7EB";
    inputPassword.style.border = "1px solid #E5E7EB";
    //console.log(e.data);
});

inputPassword.addEventListener("input", (e) => {
    password += e.data;
    divError.textContent = "";
    inputPasswordConfirm.style.border = "1px solid #E5E7EB";
    inputPassword.style.border = "1px solid #E5E7EB";
    //console.log(pw);
});



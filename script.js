
const btnSubmit = document.querySelector("#submit");
const inputPassword = document.querySelector("#password");
const inputPasswordConfirm = document.querySelector("#confirmPassword");
const divValidate = document.querySelector(".validate");
const borderMatch = "1px solid #00b33c";
const borderNoMatch = "1px solid #ff0000";
const borderNormal = "1px solid #E5E7EB";


function validatePassword() {
    if(inputPassword.value == inputPasswordConfirm.value &&
        inputPassword.value.length != 0 ) {
        divValidate.textContent = "* Passwords match";
        divValidate.style.color = "#00b33c";
        inputPassword.style.border = borderMatch;
        inputPasswordConfirm.style.border = "1px solid #00b33c";
    }
    else {
        divValidate.textContent = "* Password don't match";
        divValidate.style.color = "#ff0000";
        inputPassword.style.border = borderNoMatch;
        inputPasswordConfirm.style.border = "1px solid #ff0000";
    }
}

function setNormal() {
    divValidate.textContent = "";
    inputPassword.style.border = borderNormal;
    inputPasswordConfirm.style.border = borderNormal;
}

inputPassword.addEventListener("keyup", (e) => {
    if(inputPasswordConfirm.value.length != 0) {
        validatePassword();
    }
    if(inputPassword.value.length == 0 && inputPasswordConfirm.value.length == 0) {
       setNormal();
    }
})

inputPasswordConfirm.addEventListener("keyup", () => {
    validatePassword();
    if(inputPassword.value.length == 0 && inputPasswordConfirm.value.length == 0) {
        setNormal();
    }
})

btnSubmit.addEventListener("click", (e) => {
    if(inputPassword.value != inputPasswordConfirm.value) {
        console.log("here");
        e.preventDefault();
    }
});
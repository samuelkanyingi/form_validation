const form = document.querySelector("form")
const email = document.querySelector("#mail");
const country = document.querySelector("#country");
const postalCode = document.querySelector("#postalCode");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const btn = document.querySelector("#btn");
const emailError =document.querySelector(".emailError");
const countryError =document.querySelector(".countryError");
const postalCodeError =document.querySelector(".postalCodeError");
const passwordError =document.querySelector(".passwordError");
const confirmPasswordError =document.querySelector(".confirmPasswordError");
console.log(btn)
email.addEventListener("input", (event) => {
  
    if(email.validity.valid) {
        
        emailError.textContent = "";
        //emailError.className = "error";
    }
    else {
        showError(email);
        console.log("hello")
    }     
})
country.addEventListener("input", (event)=> {
    if(!country.validity.valid) {
        console.log(country.validity);
        
        showError(country);
        console.log("country name is too short");  
    }
    else {
        countryError.textContent = "";
        countryError.className = "error";
        console.log("country name is long and accepted");
    }
})
password.addEventListener("input", (event)=> {
    if(!password.validity.valid) {
        showError(password)
    }
    else {
        passwordError.textContent = "";
        passwordError.className = "error";
        console.log("password is accepted");   
    }
})
confirmPassword.addEventListener("input", (event) => {
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("passwords do not match")
    }
    else {
        confirmPassword.setCustomValidity("")
    }
    if(!confirmPassword.validity.valid) {
        confirmPasswordError.textContent =confirmPassword.validationMessage
        confirmPasswordError.className = "error"
        //showError(confirmPassword)
        console.log("confirm password too short");
    }
    else {
        confirmPasswordError.textContent = "";
        confirmPasswordError.className = "error";
        console.log("password confirmed");
    }
})
postalCode.addEventListener("input", (event)=> {
    if(postalCode.validity.valid) {
        postalCodeError.textContent = "";
        postalCodeError.className = "error"
        
    }
    else {
        showError(postalCode);
        console.log("postal code is too okay");
        
    }
})

form.addEventListener("submit", (event) => {
    if(!email.validity.valid) {
        console.log("email is empty!");
        showError(email);
        event.preventDefault();
    }
    else if(!country.validity.valid) {
        showError(country);
        event.preventDefault();
    }
    else if(!postalCode.validity.valid) {
        showError(postalCode);
        event.preventDefault();
    }
    
    else if(!password.validity.valid) {
        showError(password)
        event.preventDefault();
    }
    else if(!confirmPassword.validity.valid) {
        showError(confirmPassword);
        event.preventDefault();
    }

})
function showError(field) {
    if (field === email ) {
        if(email.validity.valueMissing) {
         emailError.textContent = "You need a email address";
         emailError.className="error active";
        }
        else if(email.validity.typeMismatch) {
            emailError.textContent = "You need to enter a valid email address";
            emailError.className = "error active";
        }
    }
    else if (field === country) {
        if(country.validity.valueMissing) {
            console.log("country name is empty");
            
            countryError.textContent = "You must enter a country"
            countryError.className = "error active";
        }
        else if(country.validity.tooShort) {
            console.log("country name is too short");
            countryError.textContent= "enter more than 3 characters";
            countryError.className = "error active";
        }       
    }
    else if(field == password) {
        if(password.validity.valueMissing) {
            passwordError.textContent = "passowrd cannot be empty";
            passwordError.className = "error active";
        }
        else if (password.validity.tooShort) {
            passwordError.textContent = "password is too short";
            passwordError.className = "error active";
        }
    }
    else if(field == confirmPassword) {
        if (confirmPassword.validity.valueMissing) {
            confirmPasswordError.textContent = "confirm password cannot be empty";
            confirmPasswordError.className = "error active";
        }
        else if(confirmPassword.validity.tooShort) {
            confirmPasswordError.textContent = "pasword  is too short";
            confirmPasswordError.className = "error active";
            console.log("confimed its too short");
            
        }
    }
    else if(field === postalCode) {
        if (postalCode.validity.valueMissing) {
            postalCodeError.textContent = "postal code cannot be empty"
            postalCodeError.className = "error active"
        }
        else if(postalCode.validity.patternMismatch) {
            postalCodeError.textContent = "enter postal code in correct format"
            postalCodeError.className = "error active"
            console.log("still too short");
            
        }
    }
}    

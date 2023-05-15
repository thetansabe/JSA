document.getElementById("register_btn")
        .addEventListener("click", handleRegister)

function handleRegister(){
    const email = document.getElementById("email").value;
    const pass  = document.getElementById("password").value;
    //validate
    if(validateEmail(email) === true 
        && validatePass(pass) === true
        && validateRepeatPass(pass) === true){
        //neu validate thanh cong => luu localstorage
        const account = {
            email: email,
            password: pass,
        }

        const accounts = [account];
        localStorage.setItem("accounts", JSON.stringify(accounts));
        
        //luu localstorage thanh cong => chuyen trang
        window.location.href = "../login/login.html"
    }
}

function validateEmail(email){
    const err = document.getElementById("email_err")
    err.innerText = ""
    if(email.length < 8){
        err.innerText = "Email must be at least 8 characters"
        return false
    }
    if(email.match(/\S+@\S+\.\S+/) == null){
        err.innerText = "Wrong email format"
        return false
    } 
    return true
}

function validatePass(pass){
    //kiem tra xem pass co tren 8 ki tu hay khong
    const err = document.getElementById("pass_err")
    err.innerText = ""

    if(pass.length < 8){
        err.innerText = "Password must be at least 8 characters"
        return false;
    }

    return true;
}

function validateRepeatPass(pass){
    const err = document.getElementById("repeatpass_err")
    err.innerText = ""

    //repeat pass === pass
    const repeatPass = document.getElementById("repeat_password").value;

    if(repeatPass !== pass){
        err.innerText = "Wrong repeat password";
        return false;
    }

    return true;
}
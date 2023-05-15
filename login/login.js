const accounts = JSON.parse(localStorage.getItem("accounts"));

document.getElementById("login_btn").addEventListener("click", handleLogin);

function handleLogin() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (validateEmail(email) === true && validatePass(pass) === true) {
    for (let account of accounts) {
      if (email === account.email && pass === account.password) {
        window.location.href = "../index.html";
      }
    }
  }
}

function validateEmail(email) {
  const err = document.getElementById("email_err");
  err.innerText = "";
  if (email.length < 8) {
    err.innerText = "Email must be at least 8 characters";
    return false;
  }
  if (email.match(/\S+@\S+\.\S+/) == null) {
    err.innerText = "Wrong email format";
    return false;
  }
  return true;
}

function validatePass(pass) {
  //kiem tra xem pass co tren 8 ki tu hay khong
  const err = document.getElementById("pass_err");
  err.innerText = "";

  if (pass.length < 8) {
    err.innerText = "Password must be at least 8 characters";
    return false;
  }

  return true;
}

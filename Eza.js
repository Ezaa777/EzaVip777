function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var errorMsg = document.getElementById("error-msg");

  if (username === "Eza" && password === "123") {
    window.location.href = "Eza-Xz.html";
  } else {
    errorMsg.innerText = "Username atau password salah!";
  }
}
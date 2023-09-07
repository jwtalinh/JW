// validation form login
const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

// validation form login

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("NHẬP TK VÀ MẬT KHẨU VÀO");
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("ĐĂNG NHẬP THÀNH CÔNG RỒI EM NHÉ");
      window.location.href = "dowload";
    } else {
      alert("ĐĂNG NHẬP LỖI");
    }
  }
});

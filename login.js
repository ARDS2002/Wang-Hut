function Login() {
    let usernameInput = document.getElementById("floatingInput").value;
    let passwordInput = document.getElementById("floatingPassword").value;
    let tempArray = JSON.parse(localStorage.getItem("Customer")) || [];
    let loginSuccess = false;
    console.log(tempArray);
    for (let i = 0; i < tempArray.length; i++) {
        console.log(tempArray);

        if (tempArray[i].username === usernameInput && tempArray[i].password === passwordInput) {
            window.location.href = "addCart.html";
            let username = tempArray[i].username;
            localStorage.setItem("Username", JSON.stringify(username));
            loginSuccess = true;
            break;
        }
    }
    if (passwordInput === "Admin123") {
        window.location.href = "viewItem.html";
        loginSuccess = true;
    }
    if (!loginSuccess) {
        window.alert("Wrong Inputs!!!");
    }
}

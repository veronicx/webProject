function validateLogin() {
    let username1 = document.getElementById('username').value
    let password1 = document.getElementById('password').value
    window.alert(username1)
    if (
        username1 != undefined
        && username1.length > 2
        && username1 != ''
        && password1.length > 8
        && password1 != null
    ) {
        window.alert('correct')
    }
    else {
        window.alert('wrong')
    }
}

function showPassword() {
    var pw = document.getElementById("password");
    if (pw.type === "password") {
        pw.type = "text";
    } else {
        pw.type = "password";
    }
}
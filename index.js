const username = document.getElementById("username");
const password = document.getElementById("password");


document.getElementById("mysubmit").onclick = function() {
    const user = username.value;
    const pass = password.value;
    

    if (user && pass) {
        window.alert(`Welcome ${user}`);
    } 
    else {
        window.alert("Please enter both username and password.");
    }
}

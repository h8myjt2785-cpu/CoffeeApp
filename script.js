function startApp() {


    let name = document.getElementById("nameInput").value;


    if (name === "") {

        alert("Write your name first ☕");

        return;

    }


    document.getElementById("welcomeScreen").style.display = "none";


    document.getElementById("categoryScreen").style.display = "block";


    document.getElementById("helloUser").innerHTML =
        "Hello, " + name + " 👋";


}

function startApp() {

    let name = document.getElementById("nameInput").value;

    if (name === "") {

        alert("Write your name first ☕");

        return;

    }


    alert("Hello, " + name + " 👋");

}

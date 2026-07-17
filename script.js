let userName = "";

let cart = [];



function startApp() {


    userName = document.getElementById("nameInput").value;


    if(userName === "") {

        alert("Write your name first ☕");

        return;

    }


    document.getElementById("welcomeScreen").style.display = "none";

    document.getElementById("categoryScreen").style.display = "block";


    document.getElementById("helloUser").innerHTML =
        "Hello, " + userName + " 👋";


}




function openCategory(category) {


    document.getElementById("categoryScreen").style.display = "none";

    document.getElementById("productScreen").style.display = "block";


    document.getElementById("productTitle").innerHTML =
        category;



    let products = [];


    if(category === "Coffee") {

        products = [
            "Americano",
            "Cappuccino",
            "Mocha",
            "Leche con chocolate fría",
            "Leche con chocolate caliente"
        ];

    }


    if(category === "Tea") {

        products = [
            "Chai",
            "Manzanilla",
            "Manzana con canela",
            "Hierbabuena"
        ];

    }


    if(category === "Food") {

        products = [
            "Sandwich",
            "Quesadilla"
        ];

    }


    if(category === "Snack") {

        products = [
            "Nueces",
            "Chispas de chocolate"
        ];

    }


    if(category === "Drink") {

        products = [
            "Agua de limón",
            "Agua simple"
        ];

    }



    let list = document.getElementById("productList");


    list.innerHTML = "";



    products.forEach(function(item){


        list.innerHTML +=

        `
        <div>

            <button class="product">

                ${item}

                <br><br>

                <small>
                Add to cart 🛒
                </small>

            </button>

        </div>
        `;


    });


}



function backToCategories(){


    document.getElementById("productScreen").style.display = "none";

    document.getElementById("categoryScreen").style.display = "block";


}

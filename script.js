let userName = "";

let cart = [];



function startApp(){


    userName = document.getElementById("nameInput").value;


    if(userName === ""){

        alert("Write your name first ☕");

        return;

    }


    document.getElementById("welcomeScreen").style.display="none";

    document.getElementById("categoryScreen").style.display="block";


    document.getElementById("helloUser").innerHTML =
    "Hello, " + userName + " 👋";


}





function openCategory(category){


    document.getElementById("categoryScreen").style.display="none";

    document.getElementById("productScreen").style.display="block";


    document.getElementById("productTitle").innerHTML = category;



    let products = [];



    if(category==="Coffee"){

        products=[
            "Americano",
            "Cappuccino",
            "Mocha",
            "Leche con chocolate fría",
            "Leche con chocolate caliente"
        ];

    }


    if(category==="Tea"){

        products=[
            "Chai",
            "Manzanilla",
            "Manzana con canela",
            "Hierbabuena"
        ];

    }


    if(category==="Food"){

        products=[
            "Sandwich",
            "Quesadilla"
        ];

    }


    if(category==="Snack"){

        products=[
            "Nueces",
            "Chispas de chocolate"
        ];

    }


    if(category==="Drink"){

        products=[
            "Agua de limón",
            "Agua simple"
        ];

    }



    let list=document.getElementById("productList");

    list.innerHTML="";



    products.forEach(function(product){


        list.innerHTML += `

        <button class="product" onclick="addToCart('${product}')">

        ${product}

        <br><br>

        ➕ Add to cart 🛒

        </button>

        `;


    });


}





function addToCart(product){


    let item = cart.find(function(x){

        return x.name === product;

    });



    if(item){

        item.quantity++;

    } else {


        cart.push({

            name: product,

            quantity: 1

        });


    }



    alert(product + " added 🛒");


}





function showCart(){


    document.getElementById("categoryScreen").style.display="none";

    document.getElementById("productScreen").style.display="none";

    document.getElementById("cartScreen").style.display="block";



    let list=document.getElementById("cartList");


    list.innerHTML="";



    let total=0;



    cart.forEach(function(item,index){


        list.innerHTML += `

        <div class="cartItem">


        <h3>${item.name}</h3>


        <button class="smallButton" onclick="changeQuantity(${index},-1)">
        ➖
        </button>


        ${item.quantity}


        <button class="smallButton" onclick="changeQuantity(${index},1)">
        ➕
        </button>


        <br><br>


        <button onclick="removeItem(${index})">
        Remove ❌
        </button>


        </div>


        `;



        total += item.quantity;


    });



    document.getElementById("totalItems").innerHTML =
    "Total items: " + total;



}





function changeQuantity(index,amount){


    cart[index].quantity += amount;



    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }



    showCart();


}





function removeItem(index){


    cart.splice(index, 1);


    showCart();


}





function sendOrder(){


    if(cart.length === 0){

        alert("Your cart is empty ☕");

        return;

    }



    alert("Order sent 🚀");


}





function backToCategories(){


    document.getElementById("productScreen").style.display="none";

    document.getElementById("cartScreen").style.display="none";


    document.getElementById("categoryScreen").style.display="block";


}

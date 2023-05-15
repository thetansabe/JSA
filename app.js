let products = {
    data: [
        {
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}

function render(){
    //B1: get html co id la "products"
    const productsDiv = document.getElementById("products")

    //B2: lap qua mang data
    for(let product of products.data){
        //B3: dinh nghia content
        const content = `
            <div class="card">
                <div class="image-container">
                    <img src="${product.image}">
                </div>

                <div class="container">
                    <h5 class="product-name">${product.name}</h5>
                    <h6>
                        <b>Price: </b>
                        ${product.price}
                    </h6>
                    <button onclick="addToCart(this)" id="add">Thêm vào giỏ hàng</button>
                </div>
            </div>
        `

        //B4: bom content vao the html get duoc
        productsDiv.innerHTML = productsDiv.innerHTML + content
    }    
}

render()

const cart = []

function addToCart(button){
    const parent = button.parentNode //container
    const itemName = parent.querySelector(".product-name").innerText
    const itemPrice = parent.querySelector("h6").innerText

    const grandpa = parent.parentNode //card
    const imgSrc = grandpa.querySelector("img").src
    
    const addedItem = {
        name: itemName,
        price: itemPrice,
        image: imgSrc
    }
    
    cart.push(addedItem)
    
    localStorage.setItem("cart", JSON.stringify(cart))
}

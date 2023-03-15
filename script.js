import { flowers, teddies } from "./data.js";

// console.log(flowers)
// console.log(teddies)

function render(flowers, teddies) {
  const flowerSection = document.getElementById("flower");
  const teddySection = document.getElementById("teddy");

  flowerSection.innerHTML = "";
  teddySection.innerHTML = "";

  //render flowers
  for (let flower of flowers) {
    const content = `
            <a class="item" href="./detail.html">
                <div class="item_img">
                <img
                    src="${flower.img}"
                    alt=""
                />
                </div>
                <div class="item_content">
                <h3>${flower.name}</h3>
                <p>Price : ${flower.price}</p>
                </div>
            </a>
        `;

    flowerSection.innerHTML += content;
  }

  //render teddies
  for (let teddy of teddies) {
    const content = `
            <a class="item" href="./detail.html">
                <div class="item_img">
                <img
                    src="${teddy.img}"
                    alt=""
                />
                </div>
                <div class="item_content">
                <h3>${teddy.name}</h3>
                <p>Price : ${teddy.price}</p>
                </div>
            </a>
        `;

    teddySection.innerHTML += content;
  }
}

//default render
render(flowers, teddies);

//search
// document.getElementById("search").addEventListener("input", (e) => {
//   //debounce loading
//   document.getElementById("flower").innerHTML = `<div class="loading"></div>`;

//   document.getElementById("teddy").innerHTML = `<div class="loading"></div>`;

//   setTimeout(() => {
//     const targetProduct = e.target.value;
//     console.log(targetProduct);
//     const newFlowers = removeItem(targetProduct, flowers);
//     const newTeddies = removeItem(targetProduct, teddies);
//     render(newFlowers, newTeddies);
//   }, 1000);
// });

document.getElementById("search")
    .addEventListener(
        "input", 
        debounce(handleSearch, 2000)
    )

//remove item by product name
function removeItem(productName, products) {
  const arr = [];

  for (let product of products) {
    if (product.name.toLowerCase().includes(productName.toLowerCase())) {
    //   console.log(product.name);
    //   console.log(productName);
      arr.push(product);
    }
  }

  return arr;
}

// handle onChange
function handleSearch(e){
    const targetProduct = e.target.value;
    console.log(targetProduct);
    const newFlowers = removeItem(targetProduct, flowers);
    const newTeddies = removeItem(targetProduct, teddies);
    render(newFlowers, newTeddies);
}

function loading(){
    document.getElementById("flower").innerHTML = `<div class="loading"></div>`;
    document.getElementById("teddy").innerHTML = `<div class="loading"></div>`;
}

//real debounce
function debounce(fn, sleep){
    let timer = null

    return function(...args){
        loading()
        
        if(timer) {
            clearTimeout(timer)
            timer = null
        }

        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null
        }, sleep)
    }
}

const cartItems = JSON.parse(localStorage.getItem("cart"))

function render() {
  const container = document.querySelector(".container"); //getElementById === querySelector

  container.innerHTML = "";

  for (let item of cartItems) {
    const content = `<div class="row">
        <div class="item-info">
            <img src="${item.image}" alt="">
            <p>${item.name}</p>
        </div>

        <div class="item-price">
            <p>${item.price}</p>
        </div>

        <div class="item-quantity">
            <input type="number" id="quantity" min="1" max="5" value="1">
        </div>

        <div class="item-action">
            <i class="fa-solid fa-trash"></i>
        </div>
    </div> `;

    container.innerHTML += content;
  }
}

render();

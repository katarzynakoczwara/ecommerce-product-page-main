const photoBtns = document.querySelectorAll('.photos__btn');
const mainPhoto = document.querySelector('.photos__main-photo');
const minus = document.querySelector('.product-description__amount-minus');
const plus = document.querySelector('.product-description__amount-plus');
const amount = document.querySelector('.product-description__amount');
const addToCartBtn = document.querySelector('.product-description__add-to-cart-btn');
const cartIconBtn = document.querySelector('.header__cart-icon');
const cartContainer = document.querySelector('.cart');

let counter = 1;
let amountCounter = 0;

const nextPhoto = () => {
    if(counter < 4) {
        counter++;
        mainPhoto.src = `./images/image-product-${counter}.jpg`;
    } else {
        counter = 1;
        mainPhoto.src = `./images/image-product-${counter}.jpg`;
    }    
}

const prevPhoto = () => {
    if(counter > 1) {
        counter--;
        mainPhoto.src = `./images/image-product-${counter}.jpg`;
    } else {
        counter = 4;
        mainPhoto.src = `./images/image-product-${counter}.jpg`;
    }    
}

const decreaseAmount = () => {
    if(amountCounter > 0) {
        amountCounter--;
        amount.textContent = amountCounter;
    }
}

const increaseAmount = () => {
    amountCounter++;
    amount.textContent = amountCounter;    
}

const countPrice = (price, amount) => {
    return price * amount;
}

const deleteProduct = () => {
    const amountInCart = document.querySelector('.cart__product-amount');
    const finallyPriceInCart = document.querySelector('.cart__product-finally-price');
    let amount = parseInt(amountInCart.textContent);
    if(amount > 1) {
        amount--;
        amountInCart.textContent = amount;
        const result = countPrice(125, amount);
        finallyPriceInCart.textContent = `$${result}`;
    } else {
        deleteAllProducts();
    }    
}

const deleteAllProducts = () => {
    cartContainer.innerHTML = '<h4 class="cart__title">Cart</h4><p class="cart__empty">Your cart is empty</p>';
}

const addToCart = () => {
    cartIconBtn.setAttribute('data-content', amount.textContent);
    cartIconBtn.classList.add('show-amount');
    const result = countPrice(125, amount.textContent);
    cartContainer.innerHTML = `  <h4 class="cart__title">Cart</h4>
    <div class="cart__products">
      <div class="cart__product">
        <img src="./images/image-product-1.jpg" alt="" class="cart__product-img">
        <p class="cart__product-title">Autumn Limited Edition</p>
        <div class="cart__product-price-container">
          <p class="cart__product-price">$125.00 x </p>
          <p class="cart__product-amount">${amount.textContent}</p>
          <p class="cart__product-finally-price">$${result}</p>
        </div>
        <button class="cart__product-delete-btn"><i class="fas fa-trash-alt"></i></button>
      </div>
    </div>
    <div class="cart__checkout-btn">Checkout</div>`;

    const deleteProductBtn = document.querySelector('.cart__product-delete-btn');
    const deleteAllProductsBtn = document.querySelector('.cart__checkout-btn');

    deleteProductBtn.addEventListener('click', () => {
        deleteProduct();
    });

    deleteAllProductsBtn.addEventListener('click', () => {
        deleteAllProducts();
    });
}

photoBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('photos__next-photo-btn')) {
            nextPhoto();
        } else {
            prevPhoto();
        }
    })
});

minus.addEventListener('click', () => {
    decreaseAmount();
});

plus.addEventListener('click', () => {
    increaseAmount();
});

addToCartBtn.addEventListener('click', () => {
    addToCart();
});

cartIconBtn.addEventListener('click', () => {
    if(cartContainer.classList.contains('cart-show')) {
        cartContainer.classList.remove('cart-show');
    } else {
        cartContainer.classList.add('cart-show');
    }    
})



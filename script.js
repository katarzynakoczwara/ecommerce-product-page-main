const photoBtns = document.querySelectorAll('.photos__btn');
const mainPhoto = document.querySelector('.photos__main-photo');
const minus = document.querySelector('.product-description__amount-minus');
const plus = document.querySelector('.product-description__amount-plus');
const amount = document.querySelector('.product-description__amount');
const addToCartBtn = document.querySelector('.product-description__add-to-cart-btn');
const cartIconBtn = document.querySelector('.header__cart-icon');
const cartContainer = document.querySelector('.cart');
const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuCloseBtn = document.querySelector('.mobile-menu__close-btn');
const shadow = document.querySelector('.shadow');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const photos = document.querySelectorAll('.photos__photo');
const modalPhotos = document.querySelectorAll('.modal__photo');
const modalPhotoBtns = document.querySelectorAll('.modal__btn');

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
        cartIconBtn.setAttribute('data-content', amountInCart.textContent);
    } else {
        cartIconBtn.classList.remove('show-amount');
        deleteAllProducts();
    }    
}

const deleteAllProducts = () => {
    cartContainer.innerHTML = '<h4 class="cart__title">Cart</h4><p class="cart__empty">Your cart is empty</p>';
    cartIconBtn.classList.remove('show-amount');
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
        <button class="cart__product-delete-btn"><img src="./images/icon-delete.svg"></button>
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
});

burgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('mobile-menu-show');
    shadow.classList.add('shadow-show');
});

mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-show');
    shadow.classList.remove('shadow-show');
});

mainPhoto.addEventListener('click', () => {
    modal.classList.add('modal-show');
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('modal-show');
});

photos.forEach(photo => {
    photo.addEventListener('click', () => {
        photos.forEach(photo => {
            photo.classList.remove('photos__photo-focus');
        })
        photo.classList.add('photos__photo-focus');
        changeMainPhoto(photo);
        const number = photo.dataset.number;
        addFocusClass(number);
    })
})

const changeMainPhoto = photo => {
    const photoSource = window.getComputedStyle(photo).getPropertyValue('background-image');
    const cutSource = photoSource.slice(5, -2);
    const replaceSource = cutSource.replace('-thumbnail', '');
    mainPhoto.src = replaceSource;
    const modalMainPhoto = document.querySelector('.modal__main-photo');
    modalMainPhoto.src = replaceSource;
}

const addFocusClass = number => {
    modalPhotos.forEach(photo => {
        photo.classList.remove('modal__photo-focus');
    })
    modalPhotos.forEach(photo => {       
        if(photo.dataset.number === number) {
            photo.classList.add('modal__photo-focus');
        }
    })
}




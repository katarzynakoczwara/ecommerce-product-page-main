const photoBtns = document.querySelectorAll('.photos__btn');
const mainPhoto = document.querySelector('.photos__main-photo');
const minus = document.querySelector('.product-description__amount-minus');
const plus = document.querySelector('.product-description__amount-plus');
const amount = document.querySelector('.product-description__amount')

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



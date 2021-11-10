const photoBtns = document.querySelectorAll('.photos__btn');
const mainPhoto = document.querySelector('.photos__main-photo');

let counter = 1;

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

photoBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        if(btn.classList.contains('photos__next-photo-btn')) {
            nextPhoto();
        } else {
            prevPhoto();
        }
    })
})



import { addItemToCart } from '../cart/cart.js';

export function createCryptid(cryptid) {
    const ul = document.createElement('ul');

    const liID = document.createElement('li');
    liID.classList.add('id');
    liID.textContent = cryptid.id;

    const liName = document.createElement('li');
    liName.classList.add('name');
    liName.textContent = cryptid.name;

    const liPlace = document.createElement('li');
    liPlace.classList.add('place');
    liPlace.textContent = cryptid.place;

    const image = document.createElement('img');
    image.src = cryptid.image;

    const liDesc = document.createElement('li');
    liDesc.classList.add('description');
    liDesc.textContent = cryptid.description;

    const liType = document.createElement('li');
    liType.classList.add('type');
    liType.textContent = cryptid.type;

    const liPrice = document.createElement('li');
    liPrice.classList.add('price');
    liPrice.textContent = cryptid.price;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
        addItemToCart(cryptid.id);
    });


    ul.append(liID, liName, liPlace, image, liDesc, liType, liPrice, button);
    
    return ul;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(quantity, price) {
    return quantity * price;
}

export function calcCartTotal(cartArray, productsArray) {
    let cartTotal = 0;
    for (let item of cartArray) {
        let itemId = item.id;
        let productArrayItem = findById(productsArray, itemId);
        let itemPrice = productArrayItem.price;
        let itemTotal = calcItemTotal(item.quantity, itemPrice);
        cartTotal += itemTotal;
    }
    return cartTotal;
}


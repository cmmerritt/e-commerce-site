import { addItemToCart } from './cart/cart.js';

export function createCryptid(cryptid) {
    const ul = document.createElement('ul');

    ul.classList.add('cryptid');

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
    liPrice.textContent = cryptid.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const button = document.createElement('button');
    button.textContent = 'Add to cart';

    const dropdown = document.createElement('select');
    dropdown.name = 'quantity';
    dropdown.id = `${cryptid.id}`;
    let i = 1;
    for (i; i <= 10; i++) {
        let number = document.createElement('option');
        number.value = i;
        number.textContent = i;
        dropdown.append(number);
    }

    button.addEventListener('click', () => {
        const indexChosen = dropdown.selectedIndex;
        const quantity = indexChosen + 1;
        addItemToCart(cryptid.id, quantity);
    });


    ul.append(liID, liName, liPlace, image, liDesc, liType, liPrice, button, dropdown);
    
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
    return cartTotal.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });
}


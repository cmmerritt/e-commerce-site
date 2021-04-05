import { calcCartTotal } from '../utils.js';

export function cartLineItemDom(cartItem, cryptid) {
    //create tr for product to live in
    //create tds for name, quantity, and price
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = cryptid.name;
    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = cryptid.price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}

export function totalLineItemDom(cartArray, productsArray) {
    let cartTotal = calcCartTotal(cartArray, productsArray);
    
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td3.textContent = cartTotal;

    tr.append(td1, td2, td3);
    
    return tr;
}
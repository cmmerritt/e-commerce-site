import { findById } from '../utils.js';
import { cartLineItemDom, totalLineItemDom } from './render-line-items.js';
import { cryptid } from '../cryptids.js';
import { cart } from './cart.js';

for (let cartItem of cart) {
    //find cryptid from array of all
    const crpytidMatch = findById(cryptid, cartItem.id);
    const tr = cartLineItemDom(cartItem, crpytidMatch);
    document.getElementById('cart-items').append(tr);
}

const totalRow = totalLineItemDom(cart, cryptid);

document.getElementById('cart-items').append(totalRow);

const button = document.getElementById('place-order-button');

button.addEventListener('click', () => {
    alert(JSON.stringify(cart, true, 2));
    localStorage.clear();
    window.location = '/';
});

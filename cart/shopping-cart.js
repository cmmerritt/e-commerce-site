import { findById } from '../utils.js';
import { cartLineItemDom, totalLineItemDom } from '../cart/render-line-items.js';
import { cryptidCart } from './cart.js';
import { cryptid } from '../cryptids.js';

for (let cartItem of cryptidCart) {
    //find cryptid from array of all
    const crpytidMatch = findById(cryptid, cartItem.id);
    const tr = cartLineItemDom(cartItem, crpytidMatch);
    document.getElementById('cart-items').append(tr);
}

const totalRow = totalLineItemDom(cryptidCart, cryptid);

document.getElementById('cart-items').append(totalRow);

import { getCart } from './cart-api.js';
import { findById } from '../utils.js';
import { setCart } from './cart-api.js';

export const cart = getCart();

// quantity should change according to dropdown number selected
// find number selected (by id on option?) & add corresponding number to quantity

export function addItemToCart(productId) {
    const matchingItem = findById(cart, productId);
    const dropMenu = document.getElementById(productId);
    const numSelected = dropMenu.value;
    if (matchingItem) {
        matchingItem.quantity += Number(numSelected);
    } else {
        const item = {
            id: productId,
            quantity: Number(numSelected),
        };
        cart.push(item);
    } 
    setCart(cart);
}

/* 
export const cryptidCart = [
    {
        id: 'a2',
        quantity: 3,
    },
    {
        id: 'a5',
        quantity: 5,
    },
    {
        id: 'a1',
        quantity: 10,
    },
];
  */
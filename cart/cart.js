import { getCart } from './cart-api.js';
import { findById } from '../utils.js';
import { setCart } from './cart-api.js';

export const cart = getCart();

export function addItemToCart(productId) {
    const matchingItem = findById(cart, productId);
    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        const item = {
            id: productId,
            quantity: 1,
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
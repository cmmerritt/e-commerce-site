import { getCart, setCart } from './cart-api.js';
import { findById } from '../utils.js';

export const cart = getCart();

// quantity should change according to dropdown number selected
// find number selected (by id on option?) & add corresponding number to quantity

export function addItemToCart(productId, numberSelected) {
    const matchingItem = findById(cart, productId);
    if (matchingItem) {
        matchingItem.quantity += numberSelected;
    } else {
        const item = {
            id: productId,
            quantity: numberSelected,
        };
        console.log(item);
        cart.push(item);
    } 
    setCart(cart);
    console.log(cart);
}

/* export const cryptidCart = [
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
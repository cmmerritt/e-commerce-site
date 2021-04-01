

const CART = 'CART';

export function getCart() {
    const cartString = localStorage.getItem(CART);
    const parsedCart = JSON.parse(cartString);
    if (parsedCart) {
        return parsedCart;
    } else {
        return [];
    }
}

export function setCart(parsedCart) {
    const cartString = JSON.stringify(parsedCart);
    localStorage.setItem(CART, cartString);
}







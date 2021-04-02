// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getCart, setCart } from '../cart/cart-api.js';
import { addItemToCart } from '../cart/cart.js';

const test = QUnit.test;

const testCart = [
    {
        id: 'a1',
        quantity: 1,
    },
    {
        id: 'a2',
        quantity: 2,
    },
    {   
        id: 'a4',
        quantity: 4,

    },
];
   
const testItem = [
    {
        id: 'a5',
        quantity: 1,
    }
];

test('getCart should retrieve cart from localStorage', (expect) => {
    // test for a case where we expect parsedCart and a case where we expect []
    // if we pass in cartString [{"id":"a1","quantity":1},{"id":"a2","quantity":1},{"id":"a4","quantity":4}] 
    // then we should expect a parsed cart (array)
    const cartAsString = JSON.stringify(testCart);
    localStorage.setItem('CART', cartAsString);

    const actual = getCart();

    expect.deepEqual(actual, testCart);
});

test('setCart should store cart in localStorage', (expect) => {

    setCart(testCart);

    const expected = JSON.parse(localStorage.getItem('CART'));
    
    expect.deepEqual(testCart, expected);
});

test('addItemToCart should add chosen item and quantity', (expect) => {
    const stringyCart = JSON.stringify(testCart);
    localStorage.setItem('CART', stringyCart);
    addItemToCart('a5', 1);

    const actual = JSON.parse(localStorage.getItem('CART'));

    const expected = testItem;
    
    expect.deepEqual(actual, expected);
});
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCryptid, findById, calcItemTotal, calcCartTotal } from '../utils.js';
import { cryptid } from '../cryptids.js';
import { cartLineItemDom } from '../cart/render-line-items.js';

const testCart = [
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

const test = QUnit.test;

test('test createCryptid function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 	
    "<ul><li class=\"id\">a1</li><li class=\"name\">Jersey Devil</li><li class=\"place\">Pine Barrens, New Jersey, USA</li><img src=\"https://www.placecage.com/200/200/\"><li class=\"description\">I have a goat's head, a bat's wings, two legs with cloven hooves, and a forked tail.</li><li class=\"type\">Winged</li><li class=\"price\">99.99</li><button>Add to cart</button><select name=\"quantity\" id=\"a1\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option><option value=\"6\">6</option><option value=\"7\">7</option><option value=\"8\">8</option><option value=\"9\">9</option><option value=\"10\">10</option></select></ul>";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCryptid(cryptid[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('test findById function', (expect) => {
    const expected = cryptid[0];
    const actual = findById(cryptid, 'a1');
    const expected2 = cryptid[1];
    const actual2 = findById(cryptid, 'a2');
    expect.equal(actual, expected);
    expect.equal(actual2, expected2);
});

test('test calcItemTotal', (expect) => {
    const expected = 1499.97;
    const actual = calcItemTotal(3, 499.99);
    expect.equal(actual, expected);
});

test('test cartLineItemDom', (expect) => {
    const expected = '<tr><td>Mongolian Death Worm</td><td>3</td><td>599.99</td></tr>';
    const worm = findById(cryptid, 'a2');
    const lineItem = cartLineItemDom(testCart[0], worm);
    const actual = lineItem.outerHTML;
    expect.equal(actual, expected);
});

test('test calcCartTotal', (expect) => {
    const expected = (599.99 * 3) + (7999.99 * 5) + (99.99 * 10);
    const actual = calcCartTotal(testCart, cryptid);
    expect.equal(actual, expected);
});
              
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { createCryptid } from '../utils.js';
import { cryptid } from '../cryptids.js';

const test = QUnit.test;

test('test createCryptid function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = '<ul><li class="id">a1</li><li class="name">Jersey Devil</li><li class="place">Pine Barrens, New Jersey, USA</li><img src="https://www.placecage.com/200/200/"><li class="description">I have a goat\'s head, a bat\'s wings, two legs with cloven hooves, and a forked tail.</li><li class="type">Winged</li><li class="price">999999999</li><button>Add to cart</button></ul>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createCryptid(cryptid[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

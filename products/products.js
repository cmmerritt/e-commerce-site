import { createCryptid } from '../utils.js';
import { cryptid } from '../cryptids.js';

const ul = document.querySelector('.product');

for (let c of cryptid) {
    const li = createCryptid(c);
    ul.append(li);
}
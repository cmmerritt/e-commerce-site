export function cartLineItemDom(cartItem, cryptid) {
    //create tr for product to live in
    //create tds for name, quantity, and price
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = cryptid.name;
    tdQuantity.textContent = cartItem.quantity;
    tdPrice.textContent = cryptid.price;

    tr.append(tdName, tdQuantity, tdPrice);

    return tr;
}
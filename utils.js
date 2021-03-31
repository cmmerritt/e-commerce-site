export function createCryptid(cryptid) {
    const ul = document.createElement('ul');

    const liID = document.createElement('li');
    liID.classList.add('id');
    liID.textContent = cryptid.id;

    const liName = document.createElement('li');
    liName.classList.add('name');
    liName.textContent = cryptid.name;

    const liPlace = document.createElement('li');
    liPlace.classList.add('place');
    liPlace.textContent = cryptid.place;

    const image = document.createElement('img');
    image.src = cryptid.image;

    const liDesc = document.createElement('li');
    liDesc.classList.add('description');
    liDesc.textContent = cryptid.description;

    const liType = document.createElement('li');
    liType.classList.add('type');
    liType.textContent = cryptid.type;

    const liPrice = document.createElement('li');
    liPrice.classList.add('price');
    liPrice.textContent = cryptid.price;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';


    ul.append(liID, liName, liPlace, image, liDesc, liType, liPrice, button);
    
    return ul;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        } else {
            return null;
        }
    }
}
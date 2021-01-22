import { renderLineItems, getCartTotal } from './render-line-items.js';
import { getCart } from '../cart-utils.js';

const CART = 'CART';

const table = document.querySelector('table');



const cart = getCart();

let total = getCartTotal(cart);

// let total = 0;

for (let item of cart) {
    // const album = findById(item.id, albums);
    // const totalForThisAlbum = item.quantity * album.price;

    // total = total + totalForThisAlbum;

    const tableRow = renderLineItems(item);

    table.append(tableRow);
}

const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order Total: $${total}`;
tr.append(td1, td2, td3);
table.append(tr);

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const cart = getCart();
    alert(JSON.stringify(cart, true, 2));
    localStorage.removeItem(CART);
    window.location.href = '../index.html';
});

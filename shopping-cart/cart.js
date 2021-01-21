import { cart } from './cart-data.js';
import { albums } from '../Product/albums.js';

import { renderLineItems } from './render-line-items.js';
import { findById } from './utils.js';

const table = document.querySelector('table');

let total = 0;

for (let item of cart) {
    const animal = findById(item.id, albums);
    const totalForThisAlbum = item.quantity * animal.price;

    total = total + totalForThisAlbum;

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
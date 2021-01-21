import { cart } from './cart-data.js';
import { renderLineItems } from './render-line-items.js';

const table = document.querySelector('table');
for (let item of cart) {
    const tableRow = renderLineItems(item);

    table.append(tableRow);
}


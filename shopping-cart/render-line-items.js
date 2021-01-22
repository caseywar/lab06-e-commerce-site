import { findById } from './utils.js';
import { albums } from '../Product/albums.js';



export function calcLineItem(cartItem, album) {
    return cartItem.quantity * album.price;
}

export function renderLineItems(cartItem) {
    const album = findById(cartItem.id, albums);

    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const quantityTd = document.createElement('td');
    const priceTd = document.createElement('td');

    nameTd.textContent = album.name;
    quantityTd.textContent = cartItem.quantity;
    priceTd.textContent = `$${calcLineItem(cartItem, album)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;

}

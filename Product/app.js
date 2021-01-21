import { albums } from './albums.js';
import { renderAlbum } from './render.js';

const list = document.getElementById('list');

for (let album of albums) {
    const albumElement = renderAlbum(album);
    list.append(albumElement);

}
// export function renderAlbum(album) {

//     const li = document.createElement('li');
//     li.classList.add('album-items');

//     const h3 = document.createElement('h3');
//     h3.classList.add('album-name');
//     h3.textContent = album.name;
//     li.append(h3);

//     const img = document.createElement('img');
//     img.classList.add('album-image');
//     li.append(img);
//     img.src = `../assets/${album.image}`;

//     const pDescription = document.createElement('p');
//     pDescription.classList.add('album-description');
//     pDescription.textContent = album.description;
//     li.append(pDescription);

//     const pCategory = document.createElement('p');
//     pCategory.classList.add('category');
//     pCategory.textContent = album.category;
//     li.append(pCategory);

//     const pPrice = document.createElement('p');
//     pPrice.classList.add('album-price');
//     pPrice.textContent = `$${album.price}`;
//     li.append(pPrice);


//     const button = document.createElement('button');
//     button.textContent = 'Add to cart';
//     li.append(button);

//     return li;
// }
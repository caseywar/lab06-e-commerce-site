// IMPORT MODULES under test here:
import { renderAlbum } from '../Product/render.js';
import { findById } from '../shopping-cart/utils.js';
import { renderLineItems, calcLineItem } from '../shopping-cart/render-line-items.js';



const test = QUnit.test;

test('test should tak in album and return a li', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const orange = {
        id: 1,
        name: 'Channel Orange',
        image: 'channel-orange.jpg',
        description: 'The debut studio album by American R&B singer and songwriter Frank Ocean',
        category: 'Alternative R&B',
        price: 10,
    };

    const expected = `<li class="album-items"><h3 class="album-name">Channel Orange</h3><img class="album-image" src="../assets/channel-orange.jpg"><p class="album-description">The debut studio album by American R&amp;B singer and songwriter Frank Ocean</p><p class="category">Alternative R&amp;B</p><p class="album-price">$10</p><button>Add to cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAlbum(orange);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


const albums = [
    {
        id: 1,
        name: 'Channel Orange',
        image: 'channel-orange.jpg',
        description: 'The debut studio album by American R&B singer and songwriter Frank Ocean',
        category: 'Alternative R&B',
        price: 10,

    },
    {
        id: 2,
        name: 'Man on the Moon III: The Chosen',
        image: 'man-on-the-moon.jpg',
        description: 'The seventh studio album by American rapper Kid Cudi',
        category: 'Hip Hop',
        price: 20,
    },
    {
        id: 3,
        name: 'Mordechai',
        image: 'mordechai.png',
        description: 'The third studio album by American musical trio Khruangbin',
        category: 'Alternative/Indie',
        price: 15,
    },
    {
        id: 4,
        name: 'Jazz for the Jet Set',
        image: 'jazz.jpg',
        description: 'An album by American jazz vibraphonist Dave Pike',
        category: 'Jazz',
        price: 25,
    },
    {
        id: 5,
        name: 'Abacab',
        image: 'abacab.jpg',
        description: 'The eleventh studio album by English rock band Genesis',
        category: 'Art Rock',
        price: 20,
    },
    {
        id: 6,
        name: 'Morning View ',
        image: 'morning-view.jpg',
        description: 'The fourth studio album by American rock band Incubus',
        category: 'Art Rock',
        price: 15,
    },

];

test('test should take in an array and id and return an object with the same id as the array', (expect) => {

    const expected = {
        id: 3,
        name: 'Mordechai',
        image: 'mordechai.png',
        description: 'The third studio album by American musical trio Khruangbin',
        category: 'Alternative/Indie',
        price: 15,
    };

    const actual = findById(3, albums);

    //Expect
    expect.deepEqual(actual, expected);
});


test('test should take in a cart item and an album and return a price value', (expect) => {

    const album = {
        id: 3,
        name: 'Mordechai',
        image: 'mordechai.png',
        description: 'The third studio album by American musical trio Khruangbin',
        category: 'Alternative/Indie',
        price: 15,
    };

    const cartItem = {
        id: 2,
        quantity: 5
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = 75;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(cartItem, album);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//test for renderLineItems
test('test should take both a cart line item, and the corresponding product, and return a dom that matches your static html example ', (expect) => {
    //Arrange

    const album =
    {
        id: 1,
        name: 'Channel Orange',
        image: 'channel-orange.jpg',
        description: 'The debut studio album by American R&B singer and songwriter Frank Ocean',
        category: 'Alternative R&B',
        price: 10,

    };

    const cartItem = {
        id: 1,
        quantity: 3
    };
    // Set up your arguments and expectations
    const expected = `<tr><td>Channel Orange</td><td>3</td><td>$30</td></tr>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderLineItems(cartItem, album);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
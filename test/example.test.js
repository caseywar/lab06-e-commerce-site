// IMPORT MODULES under test here:
import { renderAlbum } from '../Product/render.js';

const test = QUnit.test;

test('test should take in album and return a li', (expect) => {
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

    const expected = `<li class=\"album-items\"><h3 class=\"album-name\">Channel Orange</h3><img class=\"album-image\" src=\"../assets/channel-orange.jpg\"><p class=\"album-description\">The debut studio album by American R&amp;B singer and songwriter Frank Ocean</p><p class=\"category\">Alternative R&amp;B</p><p class=\"album-price\">$10</p><button>Add to cart</button></li>`;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderAlbum(orange);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

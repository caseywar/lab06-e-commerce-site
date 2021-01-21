export function findById(id, array) {

    for (let item of array) {
        // compar our id to the id of the item in the array
        if (id === item.id) {
            return item;
        }
    }
}


export function calcLineItem(cartItem, album) {
    return cartItem.quantity * album.price;

}
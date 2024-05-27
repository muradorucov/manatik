export function addToCartAction(payload) {
    return {
        type: "ADD_TO_CART",
        payload
    }
}


export function removeFromCartAction(payload) {
    return {
        type: "REMOVE_FROM_CART",
        payload
    }
}

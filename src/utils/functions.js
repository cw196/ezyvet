export function calculateTotalPrice(cartProducts) {
    let totalAmount = 0;

    for (let key in cartProducts) {
        totalAmount += parseFloat(cartProducts[key].totalPrice);
    }

    return totalAmount;
}
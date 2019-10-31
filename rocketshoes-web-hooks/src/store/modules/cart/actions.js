export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCESS',
    product,
  };
}

export function RmFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount,
  };
}
export function updateAmountFail() {
  return {
    type: '@cart/UPDATE_AMOUNT_FAIL',
  };
}

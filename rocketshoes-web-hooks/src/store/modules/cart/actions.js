export function addToCartRequest(id, load = false) {
  return {
    type: '@cart/ADD_REQ',
    id,
    load,
  };
}
export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCESS',
    product,
    load: false,
  };
}

export function RmFromCart(id) {
  return {
    type: '@cart/Rm',
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQ',
    id,
    amount,
  };
}
export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/Update_AMOUNT_SUCESS',
    id,
    amount,
  };
}

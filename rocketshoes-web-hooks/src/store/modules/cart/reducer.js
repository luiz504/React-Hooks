import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  loading: null,
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_REQUEST': {
        draft.loading = action.id;
        break;
      }
      case '@cart/ADD_SUCESS': {
        draft.products.push(action.product);
        draft.loading = null;
        break;
      }
      case '@cart/REMOVE': {
        const productIndex = draft.products.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.products.splice(productIndex, 1);
        }
        break;
      }
      case '@cart/UPDATE_AMOUNT_SUCESS': {
        const productIndex = draft.products.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.products[productIndex].amount = Number(action.amount);
          draft.loading = null;
        }
        break;
      }
      case '@cart/UPDATE_AMOUNT_FAIL': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

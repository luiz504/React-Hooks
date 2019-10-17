import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  MdAdd,
  MdRemove,
  MdDeleteForever,
  MdRemoveShoppingCart,
} from 'react-icons/md';
import { formatPrice } from '../../Util/format';
import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/color';

import { Container, ProductTable, Total, EmptyContainer } from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <ProductTable>
            <thead>
              <tr>
                <th />
                <th>PRODUCT</th>
                <th>QTD</th>
                <th>SUBTOTAL</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {cart.map(product => (
                <tr>
                  <td>
                    <img src={product.image} alt={product.title} />
                  </td>
                  <td>
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                  </td>
                  <td>
                    <div>
                      <button type="button" onClick={() => decrement(product)}>
                        <MdRemove size={20} color="#7159c1" />
                      </button>
                      <input type="number" readOnly value={product.amount} />
                      <button type="button" onClick={() => increment(product)}>
                        <MdAdd size={20} color="#7159c1" />
                      </button>
                    </div>
                  </td>
                  <td>
                    <strong> {product.subtotal}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(CartActions.RmFromCart(product.id))
                      }
                    >
                      <MdDeleteForever size={20} color="#7159c1" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </ProductTable>
          <footer>
            <button type="button">Checkout</button>
            <Total>
              <span> Request total</span>
              <strong>{total}</strong>
            </Total>
          </footer>{' '}
        </>
      ) : (
        <EmptyContainer>
          <MdRemoveShoppingCart size={64} color={colors.whiteContrast} />
          <p>Your Shopping Cart is empty.</p>
        </EmptyContainer>
      )}
    </Container>
  );
}

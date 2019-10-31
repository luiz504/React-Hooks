import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import colors from '../../styles/color';

import { formatPrice } from '../../Util/format';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';

import {
  ProductList,
  LoadingContainer,
  LoadingAnimation,
  LoadingAnimationButton,
  LoadingAnimationButtonSvg,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [houvered, setHouvered] = useState(null);
  const quantity = useSelector(state =>
    state.cart.products.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );
  const loadingGlobal = useSelector(state => state.cart.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    async function getProducts() {
      const response = await api.get('products');

      const data = await response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  const handleHouver = useCallback(id => {
    setHouvered(id);
  }, []);

  return loading ? (
    <LoadingContainer>
      <LoadingAnimation color={colors.purple} size={60} />
    </LoadingContainer>
  ) : (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img
            src={houvered === product.id ? product.image2 : product.image}
            alt={product.title}
            onFocus={() => handleHouver(product.id)}
            onMouseEnter={() => handleHouver(product.id)}
            onMouseOut={() => handleHouver(null)}
            onBlur={() => handleHouver(null)}
          />

          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddToCart(product.id)}>
            {loadingGlobal === product.id ? (
              <LoadingAnimationButton loading={loadingGlobal === product.id}>
                <LoadingAnimationButtonSvg size={16} color={colors.whiteBase} />
              </LoadingAnimationButton>
            ) : (
              <div>
                <MdAddShoppingCart
                  key={product.id}
                  size={16}
                  color={colors.whiteBase}
                />
                {quantity[product.id] || 0}
              </div>
            )}

            <span> ADD TO CART </span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

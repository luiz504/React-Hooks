import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/action';

import { formatPrice } from '../../util/format';

import {
  Container,
  List,
  Product,
  ProducImage,
  ProductTitle,
  PoductPrice,
  AddButtonContainer,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  LoadingContainer,
  LoadingAnimation,
} from './styles';
import colors from '../../styles/color';

export default function Home() {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const quantity = useSelector(state =>
    state.cart.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProduct(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.AddToCartRequest(id));
  }

  return loading ? (
    <LoadingContainer>
      <LoadingAnimation
        isVisible
        size={50}
        type="ChasingDots"
        color={colors.purple}
      />
    </LoadingContainer>
  ) : (
    <Container>
      <List
        horizontal
        data={products}
        extraData={quantity}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Product key={item.id}>
            <ProducImage
              source={{
                uri: item.image,
              }}
            />
            <ProductTitle>{item.title}</ProductTitle>
            <PoductPrice>{item.priceFormatted}</PoductPrice>
            <AddButtonContainer onPress={() => handleAddToCart(item.id)}>
              <ProductAmount>
                <Icon
                  name="add-shopping-cart"
                  size={20}
                  color={colors.whiteBase}
                />
                <ProductAmountText>{quantity[item.id] || 0}</ProductAmountText>
              </ProductAmount>
              <AddButtonText> Add to cart</AddButtonText>
            </AddButtonContainer>
          </Product>
        )}
      />
    </Container>
  );
}

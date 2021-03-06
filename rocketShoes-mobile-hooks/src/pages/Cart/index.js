import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/action';
import { formatPrice } from '../../util/format';

import colors from '../../styles/color';

import {
  Container,
  ProductsTable,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  Productamount,
  ProductSubTotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Checkout,
  CheckoutText,
  EmptyContainer,
  EmptyContainerText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.products.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );
  const cartProducts = useSelector(state =>
    state.cart.products.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.UpdateAmountRequest(product.id, product.amount + 1));
  }
  function decrement(product) {
    dispatch(CartActions.UpdateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cartProducts.length ? (
        <>
          <ProductsTable
            data={cartProducts}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Product>
                <ProductInfo>
                  <ProductImage
                    source={{
                      uri: item.image,
                    }}
                  />
                  <ProductDetails>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductDetails>
                  <ProductDelete
                    onPress={() => dispatch(CartActions.RmFromCart(item.id))}
                  >
                    <Icon
                      name="delete-forever"
                      size={24}
                      color={colors.purple}
                    />
                  </ProductDelete>
                </ProductInfo>
                <ProductControls>
                  <ProductControlButton onPress={() => decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.purple}
                    />
                  </ProductControlButton>
                  <Productamount value={String(item.amount)} />
                  <ProductControlButton onPress={() => increment(item)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.purple}
                    />
                  </ProductControlButton>
                  <ProductSubTotal>{item.subtotal}</ProductSubTotal>
                </ProductControls>
              </Product>
            )}
          />
          <TotalContainer>
            <TotalText>Total</TotalText>
            <TotalAmount>{total}</TotalAmount>
            <Checkout>
              <CheckoutText>Checkout</CheckoutText>
            </Checkout>
          </TotalContainer>
        </>
      ) : (
        <EmptyContainer>
          <Icon
            name="remove-shopping-cart"
            size={64}
            color={colors.whiteContrast}
          />
          <EmptyContainerText>Your Shopping Cart is empty.</EmptyContainerText>
        </EmptyContainer>
      )}
    </Container>
  );
}

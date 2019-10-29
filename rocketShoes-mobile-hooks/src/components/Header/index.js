import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/color';
import {
  Logo,
  Container,
  CartContainer,
  ItemCount,
  Wrapper,
  LogoContainer,
} from './styles';

export default function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <LogoContainer onPress={() => navigation.navigate('Home')}>
          <Logo resizeMode="cover" />
        </LogoContainer>
        <CartContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color={colors.whiteBase} size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </CartContainer>
      </Container>
    </Wrapper>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

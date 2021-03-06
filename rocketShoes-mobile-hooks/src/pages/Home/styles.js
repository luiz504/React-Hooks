import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { darken } from 'polished';
import Spinner from 'react-native-spinkit';

import colors from '../../styles/color';

export const Container = styled.View`
  background: ${colors.dark};
`;
export const List = styled(FlatList)``;

export const Product = styled.View`
  background: ${colors.whiteBase};
  padding: 10px;
  margin: 15px;
  border-radius: 5px;
  width: 220px;
`;

export const ProducImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const PoductPrice = styled.Text`
  margin: 14px 0px;
  font-size: 20px;
  margin-bottom: 14px;
  font-weight: bold;
`;

export const AddButtonContainer = styled.TouchableOpacity`
  background: ${colors.purple};
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  margin-top: auto;
`;
export const ProductAmontLoading = styled.View`
  height: 42px;
  width: 53px;
  padding: 12px;
  background: ${darken(0.03, colors.purple)};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: colors.whiteBase,
})``;

export const ProductAmount = styled.View`
  padding: 12px;
  height: 42px;
  width: 53px;
  background: ${darken(0.03, colors.purple)};

  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: ${colors.whiteBase};
  margin: 0px 4px 0px 4px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: ${colors.whiteBase};
  text-transform: uppercase;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingAnimation = styled(Spinner)`
  overflow: visible;
`;

import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 25% 0;
  height: auto;
  min-height: 500px;
  background: ${colors.whiteBase};
  border-radius: 5px;
  padding: 10px 0px 10px 0px;
`;

export const Header = styled.div`
  display: flex;
  position: absolute;
  bottom: 90%;
  color: ${colors.greyDark};
`;

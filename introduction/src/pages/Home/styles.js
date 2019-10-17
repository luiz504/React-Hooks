import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../styles/colors';

export const PageNavigation = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 42px;
  color: ${colors.golden};
  transition: opacity 0.2s;
  margin-bottom: 5px;

  &:hover {
    opacity: 0.7;
  }
`;

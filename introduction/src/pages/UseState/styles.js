import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageContainer = styled.div`
  ul {
    list-style: none;
  }

  li {
    display: flex;
    font-size: 24px;
    font-weight: bold;
    color: ${colors.greyDark};
  }

  div.insert {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }

  input {
    border: 1px solid ${colors.whiteBorder};
    border-radius: 2px;
    color: ${colors.greyMedium};
    padding: 6px;
    width: 300px;
    margin-right: 15px;
  }
  button {
    padding: 0 20px;
    border-radius: 2px;
    transition: opacity 0.2s;
    background-color: ${colors.golden};
    color: ${colors.greyDark};
    border: 1px solid ${colors.whiteContrast};

    &:hover {
      opacity: 0.7;
    }
  }
`;

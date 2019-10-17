import styled from 'styled-components';
import colors from '../../styles/colors';

export const PageContainer = styled.div`
  ul {
    list-style: none;

    div.list {
      display: flex;
      align-items: center;

      li {
        font-size: 24px;
        font-weight: bold;
        color: ${colors.greyDark};
        margin-right: 15px;
      }

      > button {
        font-size: 15px;
        padding: 0px 5px;
        border-radius: 2px;
        position: absolute;

        left: 70%;
      }
    }
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

import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

import { ChasingDots } from 'styled-spinkit';
import { FaSpinner } from 'react-icons/fa';

import colors from '../../styles/color';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg)
  }
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  > li {
    display: flex;
    flex-direction: column;
    background: ${colors.whiteBase};
    border-radius: 5px;
    padding: 20px;

    > img {
      align-self: center;
      max-width: 250px;
      max-height: 280px;
      opacity: 1;

      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    > strong {
      align-self: center;
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0;
      align-self: center;
    }

    button {
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 5px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
        width: 55px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40vh;
`;

export const LoadingAnimation = styled(ChasingDots)``;

export const LoadingAnimationButtonSvg = styled(FaSpinner)``;

export const LoadingAnimationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: rgba(0, 0, 0, 0.1);
  width: 55px;

  svg {
    animation: ${rotate} 2s ease-in-out infinite;
  }
  /* */
`;

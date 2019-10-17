import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin:0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}

body {
  background: ${colors.background};
  -webkit-font-smoothing: antialiased !important
}

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px
}

body, input, button {
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  font-size: 14px;
}

button {
  cursor: pointer;
  font-size: 24px;
  font-weight: bold;
  border: 0

}
`;

import 'dotenv/config';
import React from 'react';
// import { Router } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import store from './store';
// import history from './services/history';

export default function App() {
  return (
    <Provider store={store}>
      {/* <Router history={history}> */}
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={2000} />
      </BrowserRouter>

      {/* </Router> */}
    </Provider>
  );
}

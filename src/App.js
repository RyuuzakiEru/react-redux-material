import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import store from './store';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import Cart from './components/Cart';

const App = () => (
  <Provider store={store}>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Route path="/" exact component={ProductList} />
        <Route path="/item/:id" exact component={ProductDetail} />
        <Route path="/checkout" exact component={Checkout} />
        <Cart />
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;

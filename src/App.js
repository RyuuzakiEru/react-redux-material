import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import store from './store';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
                <CssBaseline />
				<ThemeProvider theme={theme}>

					<Router>
                    <Navigation />
						<Route path="/" exact component={ProductList} />
                        <Route path="/item/:id" exact component={ProductDetail} />
					</Router>
                    <Cart />
				</ThemeProvider>
			</Provider>
		);
	}
}

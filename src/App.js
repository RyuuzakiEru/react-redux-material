import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import store from './store';
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Navigation />
					<Router>
						<Route path="/" exact component={ProductList} />
					</Router>
                    <Cart />
				</ThemeProvider>
			</Provider>
		);
	}
}

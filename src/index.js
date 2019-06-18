import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import appStore from './reducer';
import './index.css';
import App from './App';

var destination = document.querySelector('#container');

var store = createStore(appStore);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	destination
	);

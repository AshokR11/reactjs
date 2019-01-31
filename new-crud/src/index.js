import React from 'react';
import ReactDOM from 'react-dom';
import './style/css/index.css';
import App from './App';

import { createStore} from 'redux';

import { Provider } from 'react-redux';

import postReducer from './reducer/postReducer'

const store = createStore(postReducer);

ReactDOM.render(

	<Provider store={store}>
	<App />

	</Provider>, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import '/home/mbf-user/ashok/user/react/crud/src/style/css/index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import postReducer from './reducers/postReducer';
const store = createStore(postReducer);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
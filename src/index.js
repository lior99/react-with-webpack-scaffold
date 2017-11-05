import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import './mainStyle.scss';
import { createStore,  applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/mainReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  //applyMiddleware(...middleware),
);

const store = createStore(
    mainReducer,
    enhancer
);

/*
<AppContainer>
<App />
</AppContainer>
*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
);
    



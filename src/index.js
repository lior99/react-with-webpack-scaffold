import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import './mainStyle.scss';

ReactDOM.render(
    <AppContainer>
        <App />
    </AppContainer>
    , document.querySelector('#root')
);
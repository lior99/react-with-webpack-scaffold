import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import './mainStyle.scss';

ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>    
    , document.querySelector('#root')
);
    



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.js";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import rootReducer from './store';
import { configureStore } from '@reduxjs/toolkit';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({ reducer: rootReducer })

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
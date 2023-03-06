import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthProvider from './layouts/components/AuthProvider/AuthProvider';
import store from './redux/store';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AuthProvider>
                    <App />
                    <App2 />
                </AuthProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

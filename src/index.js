import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </RouterProvider>
    </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MYRoutes } from './router';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <MYRoutes />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

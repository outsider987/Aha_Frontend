import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {MYRoutes} from './router';
import './index.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <MYRoutes />
      </BrowserRouter>
    </React.StrictMode>,
);

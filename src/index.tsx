import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {MYRoutes} from './router';
import IndexWrapper from './IndexWrapper';
import ContextProvider from './store/context';
import './index.scss';
import './reset.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
      <ContextProvider>
        <BrowserRouter>
          <IndexWrapper>
            <MYRoutes />
          </IndexWrapper>
        </BrowserRouter>
      </ContextProvider>
    </React.StrictMode>,
);

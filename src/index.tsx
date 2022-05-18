import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {MYRoutes} from './router';
import StoreGlobalProvider from '~/store/context/global';
import ModalSpin from './components/ModalSpin';

import './index.scss';
import './reset.scss';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);
root.render(
    <React.StrictMode>
      <StoreGlobalProvider>
        <BrowserRouter>
          <ModalSpin toggle={false} />
          <MYRoutes />
        </BrowserRouter>
      </StoreGlobalProvider>
    </React.StrictMode>,
);

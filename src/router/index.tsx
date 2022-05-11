// router/index.js
import React, { Suspense } from 'react';

import { Outlet, useRoutes } from 'react-router-dom';

// import Home from '../views/Home';

const lazyLoad = (Comp: React.LazyExoticComponent<React.ComponentType<any>>) => {
    return (
        <Suspense fallback={<>加载中...</>}>
            <Comp />
        </Suspense>
    );
};

const routes = [
    {
        path: '/',
        element: lazyLoad(React.lazy(() => import('~/views/Home'))),
    },
];

function MYRoutes() {
    const element = useRoutes(routes);
    return element;
}

export { MYRoutes };

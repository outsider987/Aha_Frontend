import React, {Suspense} from 'react';

import {useRoutes} from 'react-router-dom';

// import Home from '../views/Home';

const lazyLoad = (Comp: React.LazyExoticComponent<React.ComponentType<any>>,
) => {
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
    children: [
      {
        path: 'search',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Search'))),
      },
      {
        path: 'search',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Search'))),
      },
      {
        path: 'search',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Search'))),
      },
    ],
  },
];

const MYRoutes = ()=> {
  const element = useRoutes(routes);
  return element;
};

export {MYRoutes};

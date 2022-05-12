import React, {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';

// import Home from '../views/Home';

const lazyLoad = (
    Comp: React.LazyExoticComponent<React.ComponentType<any>>,
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
    icon: 'logo',
    children: [
      {
        path: 'main',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Main'))),
        icon: 'template',
        isShow: true,
      },
      {
        path: 'search',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Search'))),
        icon: 'template',
        isShow: false,
      },

      {
        path: 'tags',
        element: lazyLoad(React.lazy(() => import('~/views/Home/Tags'))),
        icon: 'template',
        isShow: true,
      },
    ],
  },
];

const MYRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export {MYRoutes, routes};

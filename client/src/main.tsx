import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskList from './routes/index';
import TaskDetail from './routes/tasks/$id';
import AboutProject from './routes/about/project';
import './styles.css';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const taskListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TaskList,
});

const taskDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tasks/$id',
  component: TaskDetail,
});

const aboutProjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about/project',
  component: AboutProject,
});

const routeTree = rootRoute.addChildren([taskListRoute, taskDetailRoute, aboutProjectRoute]);
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
root.render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </StrictMode>
);
}

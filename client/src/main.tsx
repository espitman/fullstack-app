import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TaskList from './routes/example/index';
import TaskDetail from './routes/example/tasks/$id';
import AboutProject from './routes/example/about/project';
import './styles.css';

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const taskListRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/example',
  component: TaskList,
});

const taskDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/example/tasks/$id',
  component: TaskDetail,
});

const aboutProjectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/example/about',
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

import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { routes } from './src/config/routes';
const root = createRoot(document.getElementById('root')!);
const appRoutes = routes
root.render(<RouterProvider router={appRoutes}></RouterProvider>)
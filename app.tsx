import { createRoot } from 'react-dom/client';
import { Layout } from './src/components/layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Body } from './src/components/layout/body/Body';
import Error from './src/components/error/Error';
const root = createRoot(document.getElementById('root')!);
const appRoutes = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                Component: Body
            }
        ]
    }
])
root.render(<RouterProvider router={appRoutes}></RouterProvider>)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import SalesPage from './pages/SalesPage';
import HomePage from './pages/HomePage';
import CategoriesPage from "./pages/CategoriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: 'all-categories',
        element: <CategoriesPage/>,
      }
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'all-sales',
        element: <SalesPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

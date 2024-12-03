import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/styles.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Price from './routes/Price';
import History from './routes/History';
import Login from './routes/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/price', element: <Price /> },
      { path: '/history', element: <History /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);
root.render(
  <>
    <RouterProvider router={router} />
  </>
);

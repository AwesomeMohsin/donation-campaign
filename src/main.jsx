import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Donations from './components/Donations/Donations.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import DonationDetails from './components/DonationDetails/DonationDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/donation',
        element: <Donations></Donations>,
        loader: () => fetch('/public/donations.json')
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/donation/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/public/donations.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

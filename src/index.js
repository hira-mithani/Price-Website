
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SignUp from './components/auth/sign-in/SignIn';
import SignIn from './components/auth/sign-up/SignUp';
import Error from './components/error/Error';
import UpdateProfile from "./components/my-account/profile/Profile"
import MyAccount from './components/my-account/MyAccount';
import ProtectRoute from './components/protect/Protect';
import TrackMyOrder from './components/header/track-my-order/TrackMyOrder';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <App />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "account",
            element: <ProtectRoute> <MyAccount /></ProtectRoute>,
          },
          {
            path: "TrackMyOrder",
            element: <ProtectRoute> <TrackMyOrder /></ProtectRoute>,
          },
          {
            path: "account/profile",
            element: <ProtectRoute><UpdateProfile/></ProtectRoute> 
          }
    
      ],
      errorElement: <Error/>
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);



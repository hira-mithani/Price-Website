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
import ProductDetail from './components/home/smart-watches/ProductDetail';
import CheckForm from './components/checkout/CheckForm';
import OrderComplete from './components/ordercomplete/OrderComplete';
import { Provider } from 'react-redux';
import { store } from './store/store';
import EarbudDetail from './components/home/earbud-gallery/EarbudDetail';
import MobileDetail from './components/home/mobile-secion/MobileDetail';
import { CheckoutProvider } from './components/context/CheckContext';

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
        path: "track-my-order",
        element: <ProtectRoute> <TrackMyOrder /></ProtectRoute>,
      },
      {
        path: "profile",
        element: <ProtectRoute><UpdateProfile /></ProtectRoute>
      },
      {
        path: "watch/:id",
        element: <ProductDetail />
      },
      {
        path: "earbud/:id",
        element: <EarbudDetail />
      },
      {
        path: "mobile/:id",
        element: <MobileDetail />
      },
      {
        path: "checkout",
        element: <CheckForm />
      },
      {
        path: "order-complete",
        element: <OrderComplete />
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <CheckoutProvider>
      <RouterProvider router={router} />
    </CheckoutProvider>
  </Provider>  
);
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing-page';
import Login from './pages/Login';
import Register from './pages/Register';
import App from './App';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import SetBank from './pages/SetBank';
import SetPassword from './pages/SetPassword';
import CreateProduct from './pages/CreateProduct';
import SuccessCreateProduct from './pages/SuccessCreateProduct';
import Checkout from './pages/Checkout';
import SuccessPayment from './pages/SuccessPayment';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
        <Routes>
              <Route path='/' element={<App/>}/>
              <Route path='register' element={<Register/>}/>
              <Route path='login' element={<Login />}/>
              <Route path='dashboard' element={<Dashboard />}/>
              <Route path='products' element={<Products />}/>
              <Route path='orders' element={<Orders />}/>
              <Route path='analytics' element={<Analytics />}/>
              <Route path='settings' element={<Settings />}/>
              <Route path='settingsBank' element={<SetBank />}/>
              <Route path='settingsPassword' element={<SetPassword />}/>
              <Route path='create-product' element={<CreateProduct />}/>
              <Route path='create-product-success' element={<SuccessCreateProduct />}/>
              <Route path='checkout' element={<Checkout />}/>
              <Route path='success-payment' element={<SuccessPayment />}/>
        </Routes>
      </React.StrictMode>
  </BrowserRouter>
);

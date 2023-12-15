import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import {Layout,Products,Cart} from './components/index.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route  path="/" element={<Layout />} >
    <Route index path="" element={<Products />} />
    <Route index path="cart" element={<Cart />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)

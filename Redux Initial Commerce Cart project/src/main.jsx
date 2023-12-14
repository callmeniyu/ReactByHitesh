import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout.jsx'
import Products from './components/Products.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route  path="/" element={<Layout />} >
    <Route index path="" element={<Products />} />
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

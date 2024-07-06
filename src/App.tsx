import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'

import AboutPage from './pages/AboutPage'
import { productAPI } from './services/ProductService'
import ProductDetailPage from './pages/ProductDetailPage'
import NavBar from './components/NavBar'
import ProductListPage from './pages/ProductListPage'
import EditProductPage from './pages/EditProductPage'
import CreateProductPage from './pages/CreateProductPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/products'} element={<ProductListPage />} />
            <Route path={'/products/:id'} element={<ProductDetailPage />} />
            <Route path={'/createproduct'} element={<CreateProductPage />} />
            <Route path={'/editproduct/:id'} element={<EditProductPage />} />
            <Route path={'/about'} element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

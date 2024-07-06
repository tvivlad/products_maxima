import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import Tabs from '../components/Tabs'
import CreateProductModal from '../components/CreateProductModal'
import classes from './ProductListPage.module.css'

const ProductListPage = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Tabs />
    </div>
  )
}

export default ProductListPage

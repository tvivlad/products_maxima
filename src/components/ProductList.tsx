import React, { useState } from 'react'
import { productAPI } from '../services/ProductService'
import ProductCard from './ProductCard'
import classes from './ProductList.module.css'
import CreateProductModal from './CreateProductModal'
import { IProduct } from '../models/IProduct'
const ProductList = () => {
  const [count, setCount] = useState(50)

  const { data } = productAPI.useFetchAllProductsQuery(count)
  console.log('полученные данные :', data)
  const [deleteProduct, {}] = productAPI.useDeleteProductMutation()
  const removeProduct = async (prod: IProduct) => {
    const response = await deleteProduct(prod).unwrap()
    console.log('delete response :', response)
  }
  return (
    <div>
      <div className={classes.container}>
        <button
          className={`${classes.cardsList__loadBtn} ${
            count == 8 ? classes.loadBtn__active : ''
          }`}
          onClick={() => setCount(8)}
        >
          8 Продуктов
        </button>
        <button
          className={`${classes.cardsList__loadBtn} ${
            count == 16 ? classes.loadBtn__active : ''
          }`}
          onClick={() => setCount(16)}
        >
          16 Продуктов
        </button>
        <button
          className={`${classes.cardsList__loadBtn} ${
            count == 50 ? classes.loadBtn__active : ''
          }`}
          onClick={() => setCount(50)}
        >
          Все Продукты
        </button>

        <div className={classes.cardsList}>
          {data &&
            data.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
                onRemove={() => removeProduct(product)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList

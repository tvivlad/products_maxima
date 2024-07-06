import React, { useEffect, useState } from 'react'
import classes from './CreateProductModal.module.css'
import { INewProduct, IProduct } from '../models/IProduct'
import ProductCard from './ProductCard'

const CreatedProductList = () => {
  const [list, setList] = useState<INewProduct[]>([])
  const [published, setPublished] = useState(false)
  const getCreatedProduct = () => {
    const items: INewProduct[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const item = localStorage.getItem(localStorage.key(i)!)
      if (item) {
        items.push(JSON.parse(item))
      }
      setList(items)
    }
  }

  const removeProduct = (prod: INewProduct) => {
    if (window.confirm('Вы действительно хотите удалить этот товар?')) {
      localStorage.removeItem(String(prod.id))
    }
  }
  useEffect(() => {
    getCreatedProduct()
  }, [])

  return (
    <div>
      <div>
        <input type='checkbox' onChange={() => setPublished(!published)} />{' '}
        Отобразить опубликованные товары
      </div>
      {published &&
        list.map((product) =>
          product.published ? (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              onRemove={() => removeProduct(product)}
            />
          ) : (
            ''
          )
        )}
      {!published &&
        list.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onRemove={() => removeProduct(product)}
          />
        ))}
    </div>
  )
}

export default CreatedProductList

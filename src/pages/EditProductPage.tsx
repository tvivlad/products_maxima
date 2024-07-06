import React, { useState } from 'react'
import classes from './EditProductPage.module.css'
import { useParams } from 'react-router-dom'
import { categoryAPI } from '../services/CategoryAPIService'
import { productDetailAPI } from '../services/ProductDetailService'
import { productAPI } from '../services/ProductService'
import { INewProduct } from '../models/IProduct'
import axios from 'axios'

const EditProductPage = () => {
  const param = useParams()
  const { data: categories } = categoryAPI.useFetchAllCategoriesQuery(1)
  const {
    data: product,
    isLoading,
    error,
  } = productDetailAPI.useGetProductByIdQuery(param.id!)

  //const [productFromStorage, setProductFromStorage]=useState()
  let productFromStorage: INewProduct = {
    id: 1,
    title: '',
    price: 0,
    description: '',
    image: 'https://i.pravatar.cc',
    category: '',
    published: false,
  }
  if (product == null) {
    const strProduct = localStorage.getItem(String(param.id))
    if (strProduct) {
      productFromStorage = JSON.parse(strProduct)
    }
  }

  const [updateProduct, { data }] = productAPI.useUpdateProductMutation()
  const [title, setTitle] = useState(product?.title || productFromStorage.title)
  const [category, setCategory] = useState(
    product?.category || productFromStorage.category
  )
  const [description, setDescription] = useState(
    product?.description || productFromStorage?.description
  )
  const [price, setPrice] = useState(product?.price || productFromStorage.price)
  const [published, setPublished] = useState(
    false || productFromStorage.published
  )
  const [image, setImage] = useState(product?.image || productFromStorage.image)

  if (isLoading) return <h2>Загрузка</h2>

  const updateCurrentProduct = async (event: React.FormEvent) => {
    event.preventDefault()
    let id = null
    if (product) {
      id = product?.id
    } else {
      id = productFromStorage?.id
    }
    const updatedProduct = {
      id: id,
      title,
      price,
      description,
      image: 'https://i.pravatar.cc',
      category,
      published,
    }

    const response = await updateProduct(updatedProduct as INewProduct).unwrap()
    if (response) {
      localStorage.setItem(
        String(updatedProduct.id),
        JSON.stringify(updatedProduct)
      )
    }
  }
  return (
    <div>
      <h1 className={classes.title}> Редактирование продукта</h1>
      <div className={classes.editpage}>
        <div className={classes.editpage__photo}>
          <img
            src={product?.image || productFromStorage.image}
            className={classes.photo}
            alt=''
          />
        </div>
        <div className={classes.editpage__form}>
          <form className={classes.form} onSubmit={updateCurrentProduct}>
            <div>
              Название:{' '}
              <input
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              Категория:{' '}
              <select
                name=''
                id=''
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories &&
                  categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
              </select>
            </div>
            <div>
              Описание:{' '}
              <textarea
                name=''
                id=''
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              Цена:{' '}
              <input
                type='text'
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <input
                type='checkbox'
                checked={published}
                onChange={() => {
                  setPublished(!published)
                }}
              />{' '}
              опубликовано
            </div>
            <button>Обновить</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProductPage

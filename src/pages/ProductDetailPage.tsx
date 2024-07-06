import React, { useState } from 'react'
import classes from './ProductDetailPage.module.css'
import { productDetailAPI } from '../services/ProductDetailService'
import { useNavigate, useParams } from 'react-router-dom'
import { INewProduct } from '../models/IProduct'

const ProductDetailPage = () => {
  const param = useParams()
  const navigate = useNavigate()
  console.log('param ', param.id)
  const [product, setProduct] = useState<INewProduct>()
  const { data, isLoading, error } = productDetailAPI.useGetProductByIdQuery(
    param.id!
  )
  // let product: INewProduct
  let storageData
  if (data == null) {
    const strProduct = localStorage.getItem(String(param.id))
    if (strProduct) {
      //setProduct(JSON.parse(strProduct))
      storageData = JSON.parse(strProduct)
      console.log('localStorage object ', storageData)
    }
  }

  return (
    <div className={classes.page}>
      <div className={classes.page__title}>
        {data?.title || storageData?.title}
      </div>
      <div className={classes.page__info}>
        <div className={classes.page__info__photo}>
          <img
            src={data?.image || storageData?.image}
            className={classes.photo}
            alt=''
          />
        </div>
        <div className={classes.page__info__details}>
          <div className={classes.info__category}>
            <span className={classes.info__titles}>Категория: </span>{' '}
            {data?.category || storageData?.category}
          </div>
          <div className={classes.info__description}>
            <span className={classes.info__titles}>Описание: </span>{' '}
            {data?.description || storageData?.description}
          </div>
          <div className={classes.info__price}>
            <span className={classes.info__titles}>Цена: </span>{' '}
            {data?.price || storageData?.price}
          </div>
          <div className={classes.info__rate}>
            <span className={classes.info__titles}>Рейтинг: </span>{' '}
            {data?.rating.rate}
          </div>
          <div className={classes.info__count}>
            <span className={classes.info__titles}>В наличии: </span>{' '}
            {data?.rating.count}
          </div>

          <div>
            <button
              className={classes.info_editbtn}
              onClick={() => navigate(`/editproduct/${param.id}`)}
            >
              Редактировать
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage

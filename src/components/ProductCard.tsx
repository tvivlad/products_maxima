import React, { FC } from 'react'
import { INewProduct, IProduct, IRating } from '../models/IProduct'
import classes from './ProductCard.module.css'
import { useNavigate } from 'react-router-dom'
import { productAPI } from '../services/ProductService'

interface ProductCardProps {
  id: number
  title: string
  image: string
  price: number
  rating?: IRating
  onRemove: () => void
}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  rating,
  onRemove,
}) => {
  const navigate = useNavigate()

  return (
    <div className={classes.card} onClick={() => navigate(`/products/${id}`)}>
      <div className={classes.card__title}>{title}</div>
      <div className={classes.card__imageblock}>
        <img src={image} className={classes.card__image} />
      </div>
      <div className={classes.card__price}>Цена: {price}</div>
      <div className={classes.card__count}>Количество: {rating?.count}</div>
      <div className={classes.card__rate}>Рейтинг: {rating?.rate}</div>
      <button className={classes.card_btn_remove} onClick={onRemove}>
        &#10006;
      </button>
    </div>
  )
}

export default ProductCard

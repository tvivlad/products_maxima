import React, { FC, useState } from 'react'
import classes from './CreateProductModal.module.css'
import { categoryAPI } from '../services/CategoryAPIService'
import { productAPI } from '../services/ProductService'
import { INewProduct, IProduct } from '../models/IProduct'
interface CreateProductModalProps {
  show: boolean
  onClose: () => void
}

const CreateProductModal: FC<CreateProductModalProps> = ({ show, onClose }) => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [published, setPublished] = useState(false)

  const [createProduct, { data, isLoading, error, isSuccess }] =
    productAPI.useCreateProductMutation()
  const { data: categories } = categoryAPI.useFetchAllCategoriesQuery(1)

  const addProduct = async (event: React.FormEvent) => {
    event.preventDefault()
    const newProduct = {
      id: Date.now(),
      title,
      price,
      description,
      image: 'https://i.pravatar.cc',
      category,
    }
    //console.log('newProduct :', newProduct)

    const response = await createProduct(newProduct as INewProduct).unwrap()
    console.log('response :', response)
    if (response) {
      localStorage.setItem(String(newProduct.id), JSON.stringify(newProduct))
    }
    if (isLoading) {
      return <h2>Загрузка...</h2>
    }

    onClose()
  }

  return (
    <div>
      {show && (
        <div className={classes.modal__backdrop}>
          <div className={classes.modal__window}>
            <h2 className={classes.modal__title}> Добавить товар</h2>
            <form className={classes.form} onSubmit={addProduct}>
              <div>
                <div>Название товара</div>
                <input
                  className={classes.addForm__input}
                  type='text'
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>
              <div>
                <div>Цена товара:</div>
                <input
                  className={classes.addForm__input}
                  type='text'
                  value={price}
                  onChange={(event) => setPrice(Number(event.target.value))}
                />
              </div>
              <div>
                <div>Описание товара</div>
                <textarea
                  name=''
                  id=''
                  className={classes.addForm__textarea}
                  rows={5}
                  cols={40}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                ></textarea>
              </div>
              <div>
                <div>Категория:</div>

                <select
                  name=''
                  id=''
                  className={classes.addForm__select}
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  {categories &&
                    categories.map((category) => (
                      <option key={category}>{category}</option>
                    ))}
                </select>
              </div>

              <div>
                <input
                  type='checkBox'
                  className={classes.addForm__checkBox}
                  checked={published}
                  onChange={(event) => setPublished(!published)}
                />{' '}
                <span className={classes.checkBox__textSize}>Опубликован</span>
              </div>

              <div className={classes.addForm__buttons}>
                <button
                  className={classes.addForm__buttons__addBtn}
                  onClick={addProduct}
                >
                  Добавить
                </button>{' '}
                <button
                  className={classes.addForm__buttons_cancelBtn}
                  onClick={onClose}
                >
                  Отмена{' '}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateProductModal

import React, { useState } from 'react'
import classes from './Tabs.module.css'
import ProductList from './ProductList'
import CreatedProductList from './CreatedProductList'
export interface TabsProps {}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div>
      <div className={classes.tab}>
        <div
          className={
            activeTab == 1
              ? classes['tab__button__active']
              : classes['tab__button']
          }
          onClick={() => setActiveTab(1)}
        >
          Загруженные
        </div>
        <div
          className={
            activeTab == 2
              ? classes['tab__button__active']
              : classes['tab__button']
          }
          onClick={() => setActiveTab(2)}
        >
          Созданные
        </div>
      </div>
      <div className={classes.tab_content}>
        <div
          className={
            activeTab == 1
              ? classes['content__page__active']
              : classes['content__page']
          }
        >
          <ProductList />
        </div>
        <div
          className={
            activeTab == 2
              ? classes['content__page__active']
              : classes['content__page']
          }
        >
          <CreatedProductList />
        </div>
      </div>
    </div>
  )
}

export default Tabs

export interface IRating {
  rate: number
  count: number
}

export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface INewProduct {
  id: number
  title: string
  price: number
  description: string
  image: string
  category: string
  published: boolean
}

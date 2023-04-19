export interface Item {
  id: number,
  image: string,
  wine: string,
  winery: string,
  location: string,
  year: number,
  code: number,
  rating: {
    average: number,
    reviews: string,
  },
  price: string,
}
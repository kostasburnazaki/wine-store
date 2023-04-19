export interface Item {
    image: string,
    wine: string,
    country: string,
    year: number,
    code: number,
    rating: {
      average: number,
      reviews: string,
    },
    price: string,
}
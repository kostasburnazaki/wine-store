import { Languages } from "../types/Languages";

export const regEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
export const regName = /^[a-zA-Z]+$/;
export const regPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;


export const initValues = {
  currentSlide: 1,
  currentPage: 1,
  // items: [{
  //   image: '',
  //   wine: '',
  //   winary: '',
  //   location: '',
  //   year: 0,
  //   rating: {
  //     average: 0,
  //     reviews: '',
  //   },
  //   price: '',
  // }],
  // bucket: [{
  //   image: '',
  //   wine: '',
  //   code: 0,
  //   country: '',
  //   year: 0,
  //   rating: {
  //     average: 0,
  //     reviews: '',
  //   },
  //   price: '',
  // }],
  loading: false,
  filter: '',
  formik: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  },
  lang: Languages.ENG,
}

export const standartCardWidth = 250;
export const maxItemsPerSlide = 5;
export const cardMargin = 20;

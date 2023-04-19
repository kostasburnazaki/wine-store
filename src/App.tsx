import './styles/main.scss';
import { Navbar } from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Catalog } from './components/Catalog';
import { useEffect, useState } from 'react';
import { Item } from './types/Item';
// import { fetchClient } from './utils/Api';
import { initValues } from './utils/Constants';
import { ItemsContext } from './utils/ItemsContext';
import { Product } from './components/Product';
import { Home } from './components/Home';
import { Footer } from './components/Footer/Footer';
import { BucketContext } from './utils/BucketContext';

const data = [
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082097,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '521 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '522 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '523 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '524 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '525 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '526 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '527 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '528 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '529 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '529 UAH'
  },
  {
    image: 'https://content1.rozetka.com.ua/goods/images/big/14830150.jpg',
    title: 'Mare Magnum Zinfandel Big Boys',
    code: 91082096,
    country: 'Italy',
    year: 2010,
    rating: 4,
    price: '529 UAH'
  },
]

export const App = () => {
  const [items, setItems] = useState<Item[]>(initValues.items);
  const [bucket, setBucket] = useState<Item[]>(initValues.bucket);
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/wines/reds');
    const json = await resp.json();
    setItems(json);
  }

  useEffect(() => {
    getData();
    console.log(items[1])
    console.log('test')
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <ItemsContext.Provider value={{ items }}>
          <BucketContext.Provider value={{ bucket, setBucket }}>
            <div className="container">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                    </>
                  }
                />
                <Route
                  path="home"
                  element={<Navigate to='/' replace />}
                />
                <Route
                  path="signin"
                  element={
                    <Signin />
                  }
                />
                <Route
                  path="signup"
                  element={
                    <Signup />
                  }
                />
                <Route
                  path="catalog"
                  element={
                    <>
                      <Catalog />
                    </>
                  }
                />
                <Route
                  path="catalog/:productCode"
                  element={
                    <>
                      <Product />
                    </>
                  }
                />
              </Routes>
            </div>
          </BucketContext.Provider>
        </ItemsContext.Provider>
      </main>
      <Footer />
    </>
  );
}
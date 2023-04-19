import './styles/main.scss';
import { Navbar } from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Signin } from './components/Signin';
import { Catalog } from './components/Catalog';
import { useEffect, useState } from 'react';
import { Item } from './types/Item';
// import { fetchClient } from './utils/Api';
import { ItemsContext } from './utils/ItemsContext';
import { Product } from './components/Product';
import { Home } from './components/Home';
import { Footer } from './components/Footer/Footer';
import { BucketContext } from './utils/BucketContext';
import { Bucket } from './components/Bucket';

export const App = () => {
  const [items, setItems] = useState<Item[] | null>(null);
  const [bucket, setBucket] = useState<Item[] | null>(null);
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/wines/reds');
    const json = await resp.json();
    setItems(json);
  }

  useEffect(() => {
    getData();
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
                  path="bucket"
                  element={
                    <>
                      <Bucket />
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
import { FC } from "react";
import bottle from '../../image/intro-bottle.png';
import { NavLink } from "react-router-dom";
import { Preview } from "../Preview";

export const Home: FC = () => {

  return (
    <div className="home">
      <section className="home__intro">
        <div className="home__intro-section">
          <h1 className="home__intro-title">Wines from all over the world</h1>

          <p className="home__intro-paragraph">
            Our curated collection features a wide range of wines from renowned vineyards around the globe. Whether you're a seasoned connoisseur or just starting your wine journey, we have something for every taste and budget. Join us on this adventure and let's explore the fascinating world of wine together.
          </p>

          <NavLink className="home__link" to='./catalog'>
            <button className="home__button">
              More Details
            </button>
          </NavLink>
        </div>

        <img src={bottle} alt="bottle of wine" />
      </section >

      <section className="home__catalog">
        <h2 className="home__catalog-title">
          Catalog
        </h2>

        <p className="home__catalog-paragraph">
          Catalog category is where you can explore our vast selection of wines. With over 4000 different wines from around the world, there's something for everyone. From bold reds to crisp whites, sparkling wines to dessert wines, our catalog is your one-stop-shop for all your wine needs.
        </p>

        <Preview />

        <NavLink className="home__catalog-link" to='./catalog'>
          <button className="home__button">
            Catalog
          </button>
        </NavLink>
      </section>

      <section className="home__subscribe">
        <h2 className="home__subscribe-title">
          Want to be a first to know our news?
        </h2>

        <div className="home__subscribe-section">
          <input className="home__subscribe-input" placeholder="Your email" />

          <button className="home__subscribe-button">
            Subscribe
          </button>
        </div>
      </section>
    </div >
  )
}
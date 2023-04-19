import { FC } from "react";
import { Item } from "../../types/Item";
import bucket from "../../image/bucket-red.svg";
import { NavLink } from "react-router-dom";

type Props = {
    item: Item;
}

export const Card: FC<Props> = ({ item: { image, wine, code, country, year, rating, price } }) => {
  const roundedRating = Math.round(rating.average);
    return (
        <NavLink className="cards__link" to={`/catalog/${code}`}>
            <div className="cards__card">
                <img
                    className="cards__product-image"
                    src={image}
                    alt="Bottle of wine"
                />

                <div className="cards__product-title">
                    {wine}
                </div>

                <div className="cards__product-rating">
                    <span className={`stars stars--${roundedRating}`}>
                        <span className="stars__star"></span>
                        <span className="stars__star"></span>
                        <span className="stars__star"></span>
                        <span className="stars__star"></span>
                        <span className="stars__star"></span>
                    </span>

                    <span>{rating.average}</span>
                </div>

                <div className="cards__product-details">
                    <span className="cards__product-country">
                        {country}
                    </span>

                    <span className="cards__product-year">
                        {year}
                    </span>
                </div>


                <div className="cards__buy">
                    <div className="cards__buy-price">
                        {price}
                    </div>

                    <button className="cards__buy-button">
                        {/* <img src={bucket} alt="bucket" /> */}
                    </button>
                </div>
            </div>
        </NavLink>
    )
}
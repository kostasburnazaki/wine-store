import { FC } from "react";
import { Item } from "../../types/Item";
import { NavLink } from "react-router-dom";

type Props = {
  item: Item;
}

export const CardPreview: FC<Props> = ({ item: { image, wine, code, country, year } }) => {
  return (
    <NavLink className="cards__link" to={`/catalog/${code}`}>
      <div className="cards__card">
        <img
          className="cards__product-image"
          src={image}
          alt="Bottle of wine"
        />

        <div className="cards__product-wine">
          {wine}
        </div>

        <div className="cards__product-details">
          <span className="cards__product-country">
            {country}
          </span>

          <span className="cards__product-year">
            {year}
          </span>
        </div>

      </div>
    </NavLink>
  )
}
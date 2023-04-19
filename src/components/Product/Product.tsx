import { FC } from "react";
import bucket from '../../image/bucket-white.png';
import { useItemsContext } from '../../utils/ItemsContext';
import { Item } from "../../types/Item";
import { useNavigate, useParams } from "react-router-dom";
import left from "../../image/left.png";
import { Preview } from "../Preview";

export const Product: FC = () => {
  const { productCode = 0 } = useParams();
  const { items } = useItemsContext();
  const navigate = useNavigate();
  const item = items?.find((item: Item) => {
    return item.id === +productCode;
  })

  return (
    <div className="product">
      <div className="product__head">
        <button
          className="product__button--nav"
          onClick={() => navigate(-1)}
        >
          <img src={left} alt="" />
        </button>
      </div>
      
      <div className="product__content">
        <div className="product__image">
          <img src={item?.image} alt="bottle of wine" />
        </div>

        <div className="product__info">
          <div className="product__title">
            {item?.wine}
          </div>

          <div className="product__section">
            <span className="product__subtitle">Winary</span>
            <span className="product__winary-value">{item?.winery}</span>
          </div>

          <div className="product__section">
            <span className="product__subtitle">Country</span>
            <span className="product__value">{item?.location}</span>
          </div>
          <div className="product__section">
            <span className="product__subtitle">Alcohol Content</span>
            <span className="product__value">13%</span>
          </div>

          <div className="product__section">
            <span className="product__subtitle">Sugar Content</span>
            <span className="product__value">Dry</span>
          </div>

          <div className="product__section">
            <span className="product__subtitle">Volume</span>
            <span className="product__value">0.75</span>
          </div>

          <div className="product__section">
            <span className="quantity">
              <button className="product__button product__button--small">
                -
              </button>

              <span className="product__quantity">
                0
              </span>

              <button className="product__button product__button--small">
                +
              </button>
            </span>

            <span className="product__price">
              {item?.price}
            </span>
          </div>



          <button className="product__button">
            Add to cart

            <img className="product__button-image" src={bucket} alt="shopping bucket" />
          </button>
        </div>


      </div>

      <div className="product__recommend">
        <h1 className="product__recommend-title">
          You may also like
        </h1>

        <Preview />
      </div>
    </div>
  )
}
import { FC, useContext, useState } from "react"
import { ItemsContext } from "../../utils/ItemsContext";
import { Item } from "../../types/Item"
import { CardPreview } from "../CardPreview"
import { initValues, maxItemsPerSlide, standartCardWidth } from "../../utils/Constants"

export const Preview: FC = () => {
  const { items } = useContext(ItemsContext);
  const [currentSlide, setCurrentSlide] = useState<number>(initValues.currentSlide);
  const viewportWidth = document.documentElement.clientWidth;
  const cardWidth = document.querySelector('.cards__card')?.clientWidth || standartCardWidth;
  const calculatedItemsPerSlide = Math.floor(viewportWidth / (cardWidth + 20));
  const itemsPerSlide = calculatedItemsPerSlide > maxItemsPerSlide ? maxItemsPerSlide : calculatedItemsPerSlide;

  const indexOfLastCourse = currentSlide * itemsPerSlide;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerSlide;
  const currentItems = items?.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <div className="preview">
      <ul className="preview__slides">
        {currentItems?.map((item: Item) => {
          return (
            <CardPreview item={item} />
          )
        })}
      </ul>
      {/* <Pagination
        itemsPerSlide={itemsPerSlide}
        totalSlides={items.length}
        paginate={setCurrentSlide}
        currentSlide={currentSlide}
      /> */}
    </div>
  )
}
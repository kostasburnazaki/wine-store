import { FC, useContext, useState } from "react"
import { Card } from "../Card";
import { Item } from "../../types/Item";
import { Search } from "../Search";
import { ItemsContext } from "../../utils/ItemsContext";
import { Pagination } from "../Pagination";
import { initValues } from "../../utils/Constants";

export const Catalog: FC = () => {
  const { items } = useContext(ItemsContext);

  const [currentPage, setCurrentPage] = useState<number>(initValues.currentPage);
  const itemsPerPage = 25;

  const indexOfLastCourse = currentPage * itemsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - itemsPerPage;
  const currentItems = items.slice(indexOfFirstCourse, indexOfLastCourse);

  return (
    <>
      <Search />
      <div className="cards">
        {currentItems.map(item => {
          return (
            <Card key={item.code} item={item} />
          );
        })}
      </div>
      <Pagination
        itemsPerSlide={itemsPerPage}
        totalSlides={items.length}
        paginate={setCurrentPage}
        currentSlide={currentPage}
      />
    </>
  )
}
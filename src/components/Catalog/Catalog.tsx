import { FC, useContext } from "react"
import { Card } from "../Card";
import { Item } from "../../types/Item";
import { Search } from "../Search";
import { ItemsContext } from "../../utils/ItemsContext";

export const Catalog: FC = () => {
  const { items } = useContext(ItemsContext);

  return (
    <>
      <Search />
      <div className="cards">
        {items.map(item => {
          return (
            <Card key={item.code} item={item} />
          );
        })}
      </div>
    </>
  )
}
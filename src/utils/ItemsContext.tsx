import {
    createContext,
    useContext,
  } from 'react';
import { Item } from '../types/Item';
import { initValues } from './Constants';
  
  type ItemsContextType = {
    items: Item[],
  };
  
  export const ItemsContext = createContext<ItemsContextType>({
    items: initValues.items,
  });
  
  export const useItemsContext = () => useContext(ItemsContext);
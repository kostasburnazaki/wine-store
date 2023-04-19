import {
    createContext,
    useContext,
  } from 'react';
import { Item } from '../types/Item';
  
  type ItemsContextType = {
    items: Item[] | null,
  };
  
  export const ItemsContext = createContext<ItemsContextType>({
    items: null,
  });
  
  export const useItemsContext = () => useContext(ItemsContext);
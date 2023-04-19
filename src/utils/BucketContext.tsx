import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';
import { Item } from '../types/Item';
import { initValues } from './Constants';

type BucketContextType = {
  bucket: Item[],
  setBucket: Dispatch<SetStateAction<Item[]>>,
};

export const BucketContext = createContext<BucketContextType>({
  bucket: initValues.items,
  setBucket: () => {},
});

export const useBucketContext = () => useContext(BucketContext);
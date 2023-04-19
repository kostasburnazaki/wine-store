import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from 'react';
import { Item } from '../types/Item';

type BucketContextType = {
  bucket: Item[] | null,
  setBucket: Dispatch<SetStateAction<Item[] | null>>,
};

export const BucketContext = createContext<BucketContextType>({
  bucket: null,
  setBucket: () => {},
});

export const useBucketContext = () => useContext(BucketContext);
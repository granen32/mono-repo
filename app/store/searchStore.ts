import {create} from 'zustand';
import { SearchState } from '@/app/types/common';

export const useSearchStore = create<SearchState>((set) => ({
  query: '',
  results: [],
  setQuery: (query: string) => set({ query }),
  setResults: (results: any[]) => set({ results }),
}));

export default useSearchStore;
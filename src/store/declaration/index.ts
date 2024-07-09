import {create} from 'zustand';

type DeclarationrSearchState = {
    DeclarationrSearchState: string;
    SetDeclarationrSearchState: (value: string) => void;
  };
  
  export const useDeclarationrSearchStore = create<DeclarationrSearchState>((set) => ({
    DeclarationrSearchState: '',
    SetDeclarationrSearchState: (value) => set({ DeclarationrSearchState: value }),
  }));
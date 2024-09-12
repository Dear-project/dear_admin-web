import {create} from 'zustand';


type MemberSearchState = {
    memberSearch: string;
    setMemberSearch: (value: string) => void;
  };
  
  export const useMemberSearchStore = create<MemberSearchState>((set) => ({
    memberSearch: '',
    setMemberSearch: (value) => set({ memberSearch: value }),
  }));


type MemberSelectState = {
  selectClick: string;
  setSelectClick: (value: string) => void;
};

export const useSelectClick = create<MemberSelectState>((set) => ({
  selectClick: "COMMON",
  setSelectClick: (value) => set({ selectClick: value }),
}));

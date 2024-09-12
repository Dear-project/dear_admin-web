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
    setSelectClick: React.Dispatch<React.SetStateAction<string>>;  // React 형식으로 변경
  };
  
  export const useSelectClick = create<MemberSelectState>((set) => ({
    selectClick: "COMMON",
    setSelectClick: (value) => set((state) => ({
      selectClick: typeof value === "function" ? value(state.selectClick) : value
      
    })),
  }));

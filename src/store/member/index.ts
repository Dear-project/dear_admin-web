import {create} from 'zustand';

type MemberSearchState = {
    memberSearch: string;
    setMemberSearch: (value: string) => void;
  };
  
  export const useMemberSearchStore = create<MemberSearchState>((set) => ({
    memberSearch: '',
    setMemberSearch: (value) => set({ memberSearch: value }),
  }));
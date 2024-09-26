import { ScheuduleStatus } from '@/repositories/ApproveRepostiory/ApproveRepository';
import {create} from 'zustand';

type approveSelectState = {
    selectClick: ScheuduleStatus;
    setSelectClick: React.Dispatch<React.SetStateAction<ScheuduleStatus>>;  // React 형식으로 변경
  };
  
  export const useApproveSelectClick = create<approveSelectState>((set) => ({
    selectClick: "PENDING",
    setSelectClick: (value) => set((state) => ({
      selectClick: typeof value === "function" ? value(state.selectClick) : value
      
    })),
  }));
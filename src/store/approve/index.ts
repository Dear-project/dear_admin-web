import { ScheuduleStatus } from "@/repositories/ApproveRepostiory/ApproveRepository";
import React from "react";
import { create } from "zustand";

type approveSelectState = {
  selectClick: ScheuduleStatus;
  setSelectClick: React.Dispatch<React.SetStateAction<ScheuduleStatus>>; // React 형식으로 변경
};

interface additionalData {
  url: string;
  weektag: string;
  daytag: string;
  scheduletag: string;
  scheduleAttr: string;
}

type schoolDataState = {
  additionalData: additionalData;
  setAdditionalData: React.Dispatch<React.SetStateAction<additionalData>>;
};

export const useApproveSelectClick = create<approveSelectState>((set) => ({
  selectClick: "PENDING",
  setSelectClick: (value) =>
    set((state) => ({
      selectClick: typeof value === "function" ? value(state.selectClick) : value,
    })),
}));

export const useSchoolAdditionalData = create<schoolDataState>((set) => ({
  additionalData: { url: "", weektag: "", daytag: "", scheduletag: "", scheduleAttr: "" },
  setAdditionalData: (value) =>
    set((state) => ({
      additionalData: typeof value === "function" ? value(state.additionalData) : value,
    })),
}));

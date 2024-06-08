import { Dispatch, SetStateAction } from "react";


export interface SearchBarProps {
  onSubmit?: () => void;
  onChange?: (value: string) => void;
  value: string;
}
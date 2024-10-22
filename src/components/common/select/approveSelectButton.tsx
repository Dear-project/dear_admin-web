import { useState } from "react";
import {
  SelectContainer,
  SelectIcon,
  SelectItem,
  SelectItemWrap,
  SelectText,
} from "./style";
import { IoIosArrowDown } from "react-icons/io";
import { SelectProps } from "./types";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";

export const Select = ({
  items,
  value,
  zIndex,
  onChange,
  customStyle,
}: SelectProps) => {
  const [close, setClose] = useState<boolean>(true);
  const [clickEvent , setClickEvent] = useState(false);
  const queryClient = useQueryClient();

  if(clickEvent){
    setTimeout(() =>  queryClient.invalidateQueries({queryKey:[DearQueryKey.approve.getMember]}), 100);
   
  }
  return (
    <SelectContainer
      close={close}
      onClick={() => setClose((prev) => !prev)}
      style={customStyle}
    >
      <SelectText>{value==="PENDING" ? "대기": "활성화"}</SelectText>
      <SelectIcon close={close}>
        <IoIosArrowDown />
      </SelectIcon>
      {!close && (
        <SelectItemWrap style={{ zIndex }}>
          {items?.map((item, idx) => (
            <SelectItem key={idx} onClick={() => {onChange(item),
              setClickEvent(true)
            }}>
              {item==="PENDING" ? "대기": "활성화"}
            </SelectItem>
          ))}
        </SelectItemWrap>
      )}
    </SelectContainer>
  );
};
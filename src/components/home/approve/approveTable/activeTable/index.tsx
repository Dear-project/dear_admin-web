import React from "react";
import * as S from "../style";
import { getPendingMemberType } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { useMemberSearchStore } from "@/store/member";
import { FilterApproveList } from "@/utils/approve/filterApproveList";
import { statusTransform } from "@/utils/approve/statusTransform";
import convertText from "@/utils/textSplit/comvertText";

interface Props {
  activeList: getPendingMemberType[];
}

const ActiveTable = ({ activeList }: Props) => {
  const { memberSearch } = useMemberSearchStore();
  return (
    <>
      {FilterApproveList(memberSearch, activeList).map((approve, idx) => (
        <S.TR key={idx} style={{ width: "100%", gap: "10.5%", justifyContent: "normal" }}>
          <S.TD style={{ width: "10.5%" }}>{convertText.omissionText(approve.schoolName)}</S.TD>
          <S.TD style={{ width: "37.5%" }}>{approve.studentNum}/5</S.TD>
          <S.TD style={{ width: "13%", alignItems: "flex-start" }}>{statusTransform(approve.scheduleStatus)}</S.TD>
        </S.TR>
      ))}
    </>
  );
};

export default ActiveTable;

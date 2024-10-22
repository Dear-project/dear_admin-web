import React from "react";
import * as S from "../style";
import { getPendingMemberType } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { useMemberSearchStore } from "@/store/member";
import { FilterApproveList } from "@/utils/approve/filterApproveList";
import { statusTransform } from "@/utils/approve/statusTransform";
import convertText from "@/utils/textSplit/comvertText";
import useApprove from "@/hooks/Home/approve/useApprove";
import Image from "next/image";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";

interface Props {
  activeList: getPendingMemberType[];
}

const ActiveTable = ({ activeList }: Props) => {
  const { memberSearch } = useMemberSearchStore();
  const { memberApprove } = useApprove();
  return (
    <>
      {FilterApproveList(memberSearch, activeList)?.map((approve, idx) => (
        <S.TR key={idx} style={{ width: "100%" }}>
          <S.TD style={{ width: "10.5%" }}>{convertText.omissionText(approve.schoolName)}</S.TD>
          <S.TD style={{ width: "37.5%" }}>{approve.studentNum}/5</S.TD>
          <S.TD style={{ width: "13%", alignItems: "flex-start" }}>{statusTransform(approve.scheduleStatus)}</S.TD>
          <Image
            src={MoreImage}
            alt="더보기"
            style={{ width: "40px" }}
            onClick={() => memberApprove(approve.schoolSeq)}
          />
        </S.TR>
      ))}
    </>
  );
};

export default React.memo(ActiveTable);

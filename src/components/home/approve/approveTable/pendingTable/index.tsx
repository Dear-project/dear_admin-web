import React from "react";
import * as S from "../style";
import { getPendingMemberType } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { statusTransform } from "@/utils/approve/statusTransform";
import convertText from "@/utils/textSplit/comvertText";
import useApprove from "@/hooks/Home/approve/useApprove";
import Image from "next/image";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import ApproveModal from "../../approveModal";
import DearCharacter from "@/assets/img/DearCharacter.svg";

interface Props {
  pendingList: getPendingMemberType[];
}

const PendingTable = ({ pendingList }: Props) => {
  const { memberApprove, isOpen, setIsOpen } = useApprove();
  return (
    <>
      {pendingList?.length > 0 ? ( pendingList?.map((approve, idx) => (
        <>
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
          <ApproveModal isOpen={isOpen} setIsOpen={setIsOpen} schoolSeq={approve.schoolSeq} />
        </>
      ))): (
        <S.NoneDeclarationWrap>
          <Image src={DearCharacter} alt="디어캐릭터" width={200} height={200} />
          <p>대기중인 학교가 없습니다.</p>
        </S.NoneDeclarationWrap>
      )}
    </>
  );
};

export default PendingTable;

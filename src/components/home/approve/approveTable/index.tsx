"use client";
import Image from "next/image";
import * as S from "./style";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import convertText from "@/utils/textSplit/comvertText";
import { useGetPendingMemberList } from "@/queries/Approve/approve.query";
import { statusTransform } from "@/utils/approve/statusTransform";
import useApprove from "@/hooks/Home/approve/useApprove";
import { useApproveSelectClick } from "@/store/approve";

const ApproveTable = () => {
  const { selectClick } = useApproveSelectClick();
  const { data } = useGetPendingMemberList(1, selectClick);
  const { memberApprove, approve } = useApprove();

  return (
    <>
      <S.TBody style={{ width: "100%" }}>
        {data?.data.map((approveMember, idx) => (
          <S.TR key={idx} style={{ width: "100%" }}>
            <S.TD style={{ width: "10.5%" }}>{convertText.omissionText(approveMember.schoolName)}</S.TD>
            <S.TD style={{ width: "37.5%" }}>{approveMember.studentNum}/5</S.TD>
            <S.TD style={{ width: "13%", alignItems: "flex-start" }}>
              {statusTransform(approveMember.scheduleStatus)}
            </S.TD>
            <Image src={MoreImage} alt="더보기" style={{ width: "40px" }} onClick={memberApprove} />
          </S.TR>
        ))}
      </S.TBody>
    </>
  );
};

export default ApproveTable;

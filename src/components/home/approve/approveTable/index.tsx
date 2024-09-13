"use client";
import Image from "next/image";
import * as S from "./style";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import convertText from "@/utils/textSplit/comvertText";
import { useGetPendingMemberList } from "@/queries/Approve/approve.query";
import { statusTransform } from "@/utils/approve/statusTransform";

const ApproveTable = () => {
  const { data } = useGetPendingMemberList(1, "PENDING");

  return (
    <>
      <S.TBody>
        {data?.data.map((approveMember, idx) => (
          <S.TR key={idx}>
            <S.TD style={{ width: "120px" }}>{convertText.omissionText(approveMember.schoolName)}</S.TD>
            <S.TD style={{ width: "130px" }}>{approveMember.studentNum}</S.TD>
            <S.TD style={{ width: "80px" }}>{statusTransform(approveMember.scheudleStatus)}</S.TD>
            <Image src={MoreImage} alt="더보기" />
          </S.TR>
        ))}
      </S.TBody>
    </>
  );
};

export default ApproveTable;

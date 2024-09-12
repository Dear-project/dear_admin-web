"use client";
import Image from "next/image";
import * as S from "./style";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import { useGetMemberList } from "@/queries/Member/Member.query";
import { USER_STATUS } from "@/constant/userStatus/userStatus.constant";

const ApproveTable = () => {
  const {data} = useGetMemberList(USER_STATUS[1]);
  
  return (
    <>
      <S.TBody>
        {data?.data.map((approveMember, idx)=>(
        <S.TR>
          <S.TD>{approveMember.name}</S.TD>
          <Image src={MoreImage} alt="더보기" />
        </S.TR>
        ))}
      
      </S.TBody>
    </>
  );
};

export default ApproveTable;

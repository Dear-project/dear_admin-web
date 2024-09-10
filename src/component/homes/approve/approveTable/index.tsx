"use client";
import Image from "next/image";
import * as S from "./style";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";

const ApproveTable = () => {
  return (
    <>
      <S.TBody>
        <S.TR>
          <S.TD>신민호</S.TD>
          <S.TD>신민호</S.TD>
          <S.TD>신민호</S.TD>
          <Image src={MoreImage} alt="더보기" />
        </S.TR>
        <S.TR>
          <S.TD>신민호</S.TD>
          <S.TD>신민호</S.TD>
          <S.TD>신민호</S.TD>
          <Image src={MoreImage} alt="더보기" />
        </S.TR>
        <S.TR>
          <S.TD>신민호</S.TD>
          <S.TD>신민호</S.TD>
          <S.TD>신민호</S.TD>
          <Image src={MoreImage} alt="더보기" />
        </S.TR>
      </S.TBody>
    </>
  );
};

export default ApproveTable;

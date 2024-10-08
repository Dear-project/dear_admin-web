import React, { useEffect } from "react";
import defaultImg from "@/assets/img/home/Avatar1.png";
import Image from "next/image";
import * as S from "./style";
import { MemberType, MemeberResponse } from "@/types/member/member.type";
import { FilterMember } from "@/utils/member/FilterMember";
import { useMemberSearchStore, useSelectClick } from "@/store/member/index";
import { useGetMemberList } from "@/queries/Member/Member.query";
import UseMember from "@/hooks/Home/member/useMember";
import convertText from "@/utils/textSplit/comvertText";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import MoreButton from "../../moreaction/index";

const MemberTable = () => {
  const { ...useMember } = UseMember();
  const { selectClick } = useSelectClick();
  const { data } = useGetMemberList(selectClick);
  const { memberSearch } = useMemberSearchStore();

  return (
    <S.Tbody>
      {/* {data?.data.map((member: MemberType, idx) => (
        <S.TR key={member.userId} status={selectClick === "PENDING" ? true : false}>
          <S.TD>
            <Image src={defaultImg} alt="프로필사진" />
          </S.TD>
          <S.TD>{member.name}</S.TD>
          <S.TD>{convertText.omissionText(member.email)}</S.TD>
          <S.TD>
            {convertText.omissionText(member.schoolName)
              ? convertText.omissionText(member.schoolName)
              : "학교 정보 없음"}
          </S.TD>
          {selectClick === "PENDING" && (
            <Image
              src={MoreImage}
              alt="더보기"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const params = {
                  idx: idx,
                  member: member,
                };
                useMember.memberBanSetting(params);
              }}
            />
          )}
        </S.TR>
      ))} */}
      {FilterMember(memberSearch, data?.data!).map((member: MemberType, idx) => (
        <S.TR key={member.userId} status={selectClick === "PENDING" ? true : false}>
          <S.TD>
            <Image src={defaultImg} alt="프로필 사진" />
          </S.TD>
          <S.TD>{member.name}</S.TD>
          <S.TD>{convertText.omissionText(member.email)}</S.TD>
          <S.TD>
            {convertText.omissionText(member.schoolName)
              ? convertText.omissionText(member.schoolName)
              : "학교 정보 없음"}
          </S.TD>
          {selectClick === "PENDING" && (
            <Image
              src={MoreImage}
              alt="더보기"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const params = {
                  idx: idx,
                  member: member,
                };
                useMember.memberBanSetting(params);
              }}
            />
          )}
        </S.TR>
      ))}
      {useMember.moreButton && <MoreButton Id={useMember.buttonId} onClose={useMember.MemberSettingDenial} />}
    </S.Tbody>
  );
};

export default MemberTable;

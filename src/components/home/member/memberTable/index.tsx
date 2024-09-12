'use client';
import React from "react";
import defaultImg from "@/assets/img/home/Avatar1.png";
import Image from "next/image";
import * as S from "./style";
import { MemberType, MemeberResponse } from "@/types/member/member.type";
import { FilterMember } from "@/utils/member/FilterMember";
import { useMemberSearchStore } from "@/store/member/index";
import { useGetMemberList } from "@/queries/Member/Member.query";
import UseMember from "@/hooks/Home/member/useMember";
import convertText from "@/utils/textSplit/comvertText";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import MoreButton from "../../moreaction/index";
import { USER_STATUS } from "@/constant/userStatus/userStatus.constant";

const MemberTable = () => {
  const { ...useMember } = UseMember();
  console.log(useMember.selectClick);
  
  const {data} = useGetMemberList(useMember.selectClick);
  const searchValue = useMemberSearchStore();
  

  return (
    <>
      <S.Tbody>
        {data?.data.map((member: MemberType, idx) => (
          <S.TR key={member.userId}>
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
            <Image
              src={MoreImage}
              alt="더보기"
              style={{ cursor: "pointer" }}
              onClick={() => {
                const params = {
                  idx: idx,
                  member: member,
                };
                console.log(idx);

                useMember.memberBanSetting(params);
              }}
            />
          </S.TR>
        ))}
        {useMember.moreButton && <MoreButton Id={useMember.buttonId} onClose={useMember.MemberSettingDenial} />}
      </S.Tbody>
    </>
  );
};

export default MemberTable;

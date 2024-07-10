import defaultImg from "@/assets/img/home/Avatar1.png";
import Image from "next/image";
import * as S from "./style";
import { MemberType, MemeberResponse } from "@/types/member/member.type";
import { FilterMember } from "@/utils/member/FilterMember";
import { useMemberSearchStore } from "@/store/member/index";
import { useGetMemberList } from "@/queries/Member/Member.query";
import UseMember from "@/hooks/Home/member/useMember";

const MemberTable = () => {
  const memberListQuery = useGetMemberList();
  const searchValue = useMemberSearchStore();
  const { ...useMember } = UseMember();

  if (!memberListQuery) {
    // 데이터가 로딩 중일 때 처리할 내용
    return <div>Loading...</div>;
  }

  const { data } = memberListQuery as MemeberResponse;

  return (
    <>
      <S.Tbody>
        {FilterMember(searchValue, data ?? []).map((member: MemberType, idx) => (
          <S.TR key={member.UserId}>
            <S.TD>
              <Image src={defaultImg} alt="프로필사진" />
            </S.TD>
            <S.TD>{member.name}</S.TD>
            <S.TD>{member.role === "STUDENT" ? "학생" : "교수"}</S.TD>
            <S.TD>{member.email}</S.TD>
            <S.TD>{member.schoolName}</S.TD>
            <S.TD>{member.userStatus === "REJECT" ? "정지" : "활성화"}</S.TD>
          </S.TR>
        ))}
        {/* {useMember.moreButton && (
          <MoreButton
            Id={useMember.buttonId}
            onClose={useMember.MemberSettingDenial}
          />
        )} */}
      </S.Tbody>
    </>
  );
};

export default MemberTable;

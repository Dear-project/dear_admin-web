import defaultImg from "@/assets/img/home/Avatar1.png";
import Image from "next/image";
import * as S from "./style";
import { MemberType } from "@/types/member/member.type";
import { FilterMember } from "@/utils/member/FilterMember";
import { useMemberSearchStore } from "@/store/member/index";
import { useGetMemberList } from "@/queries/Member/Member.query";
import setting from "@/assets/img/home/ic_round-more-horiz.svg";
import UseMember from "@/hooks/Home/member/useMember";
import MoreButton from "../../moreaction";
import { member } from "../style";

const MemberTable = () => {
  const { data } = useGetMemberList();
  const searchValue = useMemberSearchStore();
  const { ...useMember } = UseMember();
  return (
    <>
      <S.Tbody>
        {FilterMember(searchValue, data).map((member: MemberType, idx) => (
          <S.TR key={member.UserId}>
            <S.TD>
              <Image src={defaultImg} alt="프로필사진" />
            </S.TD>
            <S.TD>{member.name}</S.TD>
            <S.TD>{member.role === "STUDENT" ? "학생" : "교수"}</S.TD>
            <S.TD>{member.email}</S.TD>
            <S.TD>{member.schoolName}</S.TD>
            <S.TD>{member.userStatus === "REJECT" ? "정지" : "활성화"}</S.TD>
            <S.TD style={{ textAlign: "center", cursor: "pointer" }}>
              <Image
                src={setting}
                alt="설정"
                onClick={() =>
                  useMember.memberBanSetting({ idx, userID: member.UserId })
                }
              ></Image>
            </S.TD>
          </S.TR>
        ))}
        {useMember.moreButton && (
          <MoreButton
            Id={useMember.buttonId}
            onClose={useMember.MemberSettingDenial}
          />
        )}
      </S.Tbody>
    </>
  );
};

export default MemberTable;

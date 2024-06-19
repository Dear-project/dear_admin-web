import defaultImg from "@/assets/img/home/Avatar1.png";
import Image from "next/image";
import * as S from "./style";
import UseMember from "@/hooks/Home/member/useMember";
import { useGetMemberList } from "@/queries/Member/Member.query";
import { MemberType } from "@/types/member/member.type";
import { SortAndFilterMember } from "@/utils/member/SortAndFilterMember";
import {useMemberSearchStore} from "@/store/member/index"

const MemberTable = async () => {
  const { ...member } = UseMember();
  const {data  } =useGetMemberList();
  const  searchValue = useMemberSearchStore();
  
  return (
    <>
      {/* <S.tbody>
        {SortAndFilterMember(data, searchValue).map((member: MemberType) => (
          <S.TR key={member.UserId}>
            <S.TD>
              <Image src={defaultImg} alt="프로필사진" />
            </S.TD>
            <S.TD>{member.name}</S.TD>
            <S.TD>{member.type}</S.TD>
            <S.TD>{member.userStatus}</S.TD>
            <S.TD>{member.schoolName}</S.TD>
          </S.TR>
        ))}
      </S.tbody> */}
    </>
  );
};

export default MemberTable;

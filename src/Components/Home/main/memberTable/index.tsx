import defaultImg from "@/assets/img/home/Avatar1.png";
import Image from "next/image";
import * as S from "./style";
import UseMember from "@/hooks/Home/member/useMember";
import { dearV1Axios } from "@/libs/axios/CustomAxios";
import CONFIG from "src/config/config.json";

interface Member {
  UserId: number;
  name: string;
  birthDay: string;
  type: string;
  userStatus: string;
  role: string;
  lClass: string;
  mClass: string;
  schoolName: string;
  seq: string;
}

// const fetchMemberList = async (): Promise<Member[]> => {
//   try {
//     const res = await dearV1Axios<Response>(`${CONFIG.server}/user`);
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     return []; 
//   }
// };

const MemberTable = async () => {
  const { ...member } = UseMember();
  // const members = await fetchMemberList();
  return (
    <>
      <S.tbody>
        {/* {members.map((member: Member) => (
          <S.TR key={member.UserId}>
            <S.TD>
              <Image src={defaultImg} alt="프로필사진" />
            </S.TD>
            <S.TD>{member.name}</S.TD>
            <S.TD>{member.type}</S.TD>
            <S.TD>{member.userStatus}</S.TD>
            <S.TD>{member.schoolName}</S.TD>
          </S.TR>
        ))} */}
      </S.tbody>
    </>
  );
};

export default MemberTable;

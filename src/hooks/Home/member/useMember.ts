import { dearV1Axios } from "@/libs/axios/CustomAxios";
import { useState } from "react";
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

const UseMember = () => {
  const [memberList, setMemberList] = useState<Member[] | null>(null);

 

  return {
    memberList,

  };
};

export default UseMember;

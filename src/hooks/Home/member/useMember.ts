import { useState } from "react";


import { MemberType } from "@/types/member/member.type";
interface MemberProps {
  idx :  number
  member : MemberType
}

const UseMember = () => {
  const [moreButton, setMoreButton] = useState(false);
  const [buttonId, setButtonId] = useState<number>(0);
  const [member, setUser] = useState<MemberType>();



  // const memberBanSetting = ({idx, member}:MemberProps ) => {
  //   setButtonId(idx)
  //   setMoreButton((prev) => !prev);
  //   setUser(member);
  // };
  // const MemberSettingDenial = ()=>{
  //   setMoreButton(false);
  // }
 



  return {
    // memberBanSetting,
    // MemberSettingDenial,
    moreButton,
    buttonId,
  };
};

export default UseMember;

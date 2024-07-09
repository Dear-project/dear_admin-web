import { useState } from "react";
import Swal from "sweetalert2";

interface MemberProps {
  idx :  number
  userID : number
}

const UseMember = () => {
  const [moreButton, setMoreButton] = useState(false);
  const [buttonId, setButtonId] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);

  const memberBanSetting = ({idx, userID}:MemberProps ) => {
    setButtonId(idx)
    setMoreButton((prev) => !prev);
    setUserId(userID);
  };
  const MemberSettingDenial = ()=>{
    setMoreButton(false);
  }
  const MemberReject = ()=>{
    
  }



  return {
    memberBanSetting,
    MemberSettingDenial,
    moreButton,
    buttonId,
  };
};

export default UseMember;

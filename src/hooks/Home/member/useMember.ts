import { useState } from "react";
import Swal from "sweetalert2";

const UseMember = () => {
  const [moreButton, setMoreButton] = useState(false);
  const [buttonId, setButtonId] = useState<number>(0);
  const memberBanSetting = (idx: number) => {
    setButtonId(idx)
    setMoreButton((prev) => !prev);
  };
  const MemberSettingDenial = ()=>{
    setMoreButton(false);
  }

  return {
    memberBanSetting,
    MemberSettingDenial,
    moreButton,
    buttonId,
  };
};

export default UseMember;

import { useRef, useState } from "react";
import { MemberType } from "@/types/member/member.type";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";
import { useSelectClick } from "@/store/member";
interface MemberProps {
  idx: number;
  member: MemberType;
}

const UseMember = () => {
  const [moreButton, setMoreButton] = useState(false);
  const [buttonId, setButtonId] = useState<number>(0);
  const [user, setUser] = useState<MemberType>();
  const queryClient = useQueryClient();
const {selectClick,setSelectClick} = useSelectClick();

  const memberBanSetting = ({ idx, member }: MemberProps) => {
    setButtonId(idx);
    setMoreButton((prev) => !prev);
    setUser(member);
  };
  const hadleSelect = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void=>{
    setSelectClick(e.target.value);
    
    console.log(selectClick);
    
    queryClient.invalidateQueries({queryKey:[DearQueryKey.member.getMember]})
    
  }
  const MemberSettingDenial = () => {
    setMoreButton(false);
  };

  return {
    memberBanSetting,
    MemberSettingDenial,
    hadleSelect,
    moreButton,
    buttonId,

  };
};

export default UseMember;

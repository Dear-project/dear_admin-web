import { useState } from "react";
import { USER_STATUS } from "@/constant/userStatus/userStatus.constant";
import { MemberType } from "@/types/member/member.type";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";
import { useGetMemberList } from "@/queries/Member/Member.query";
import { MemeberResponse } from "@/types/member/member.type";
interface MemberProps {
  idx: number;
  member: MemberType;
}

const UseMember = () => {
  const [moreButton, setMoreButton] = useState(false);
  const [buttonId, setButtonId] = useState<number>(0);
  const [user, setUser] = useState<MemberType>();
  const [selectClick, setSelectClick] = useState(USER_STATUS[0]);
  const queryClient = useQueryClient();


  const memberBanSetting = ({ idx, member }: MemberProps) => {
    setButtonId(idx);
    setMoreButton((prev) => !prev);
    setUser(member);
  };
  const hadleSelect = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void=>{
    setSelectClick(e.target.value);
    queryClient.invalidateQueries({queryKey:[DearQueryKey.member.getMember]})

  }
  const MemberSettingDenial = () => {
    setMoreButton(false);
  };

  return {
    memberBanSetting,
    MemberSettingDenial,
    hadleSelect,
    selectClick,
    moreButton,
    buttonId,
  };
};

export default UseMember;

import { MemberType } from "@/types/member/member.type";
import { searchName } from "../common/searchName";
export const FilterMember = (searchValue: string | any, memberInfo: MemberType[]) => {
  if (memberInfo === undefined) {
    return [];
  } else {
    return memberInfo.filter((member) => searchName(member.name, searchValue));
  }
};

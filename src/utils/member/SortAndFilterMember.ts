import { searchName } from "../common/searchName"
import { MemberType } from "@/types/member/member.type"
export const SortAndFilterMember =(  searchValue: string | any,memberInfo: MemberType[] )=>{
    console.log(memberInfo);
    return memberInfo.filter((data)=>searchName(data.name, searchValue))

}
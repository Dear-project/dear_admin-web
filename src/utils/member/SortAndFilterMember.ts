import { searchName } from "../common/searchName"
import { MemberType } from "@/types/member/member.type"
export const SortAndFilterMember =(  searchValue: string,memberInfo: MemberType[] )=>{
    return memberInfo.filter((data)=>searchName(data.name, searchValue))

}
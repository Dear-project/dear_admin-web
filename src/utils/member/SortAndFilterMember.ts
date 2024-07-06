import { searchName } from "../common/searchName"
import { MemberType } from "@/types/member/member.type"
export const SortAndFilterMember =(  searchValue: string | any,memberInfo: MemberType[] )=>{
    console.log(memberInfo);
    console.log(searchValue);
   
    if (typeof searchValue != 'string'){
        console.log("true");
        return memberInfo
    }
    else{
        alert(searchValue);
        return memberInfo.filter((data)=>searchName(data.name, searchValue))
    }
}
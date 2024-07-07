import { searchName } from "../common/searchName"
import { MemberType } from "@/types/member/member.type"
export const SortAndFilterMember =(  searchValue: string | any,memberInfo: MemberType[] )=>{   
    
    if (searchValue.memberSearch == ''){
        return memberInfo
    }
    else{
        
        return memberInfo.filter((data)=>searchName(data.name, searchValue))
    }
}
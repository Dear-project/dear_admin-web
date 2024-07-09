import { MemberType } from "@/types/member/member.type"
export const FilterMember =(  searchValue: string | any,memberInfo: MemberType[] )=>{   
    
    if (searchValue.memberSearch == ''){
        return memberInfo
    }
    else{
        return memberInfo.filter()
    }
}
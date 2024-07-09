import { searchName } from "../common/searchName"
import {Delcaration} from "@/types/declaration/declaration.type"
export const SortAndFilterMember =(  searchValue: string | any,memberInfo: Delcaration[] )=>{   
    
    if (searchValue.memberSearch == ''){
        return memberInfo
    }
    else{
        
        return memberInfo.filter((data)=>searchName(data.reportName, searchValue))
    }
}
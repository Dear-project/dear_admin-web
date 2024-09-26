import { getPendingMemberType } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { searchName } from "../common/searchName";

export const FilterApproveList = (searchValue: string | any, approveInfo: getPendingMemberType[]) => {
  if (approveInfo === undefined) {
    return [];
  } else {
    return approveInfo.filter((approve) => searchName(approve.schoolName, searchValue));
  }
};

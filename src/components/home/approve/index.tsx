"use client";
import { useMemberSearchStore } from "@/store/member";
import { SearchBar } from "../searchBar/searchBar";
import Table from "../table";
import ApproveTable from "./approveTable";
import * as S from "./style";
import { APPROVE_MEMBER_TABLE_ITEM ,APPROVE_STATUS } from "@/constant/approve/approve.constants";
import { Select } from "@/components/common/select/approveSelectButton";
import { useApproveSelectClick } from "@/store/approve";

const Approve = () => {
  const { memberSearch, setMemberSearch } = useMemberSearchStore();
  const {selectClick,setSelectClick} = useApproveSelectClick();

  return (
    <S.Main>
      <S.PendingMember>
        <S.SearchBox>
          <Select
          items={APPROVE_STATUS}
          value={selectClick}
          onChange={setSelectClick}
          zIndex={1}
          />
          <SearchBar value={memberSearch} onChange={setMemberSearch} />
        </S.SearchBox>
        <table>
          <Table constant={APPROVE_MEMBER_TABLE_ITEM} style={{ width: "85%" }} />
        </table>
        <S.PendingMemberMain>
          <S.PendingMemberList>
            <ApproveTable />
          </S.PendingMemberList>
        </S.PendingMemberMain>
      </S.PendingMember>
    </S.Main>
  );
};

export default Approve;

"use client";
import { useMemberSearchStore } from "@/store/member";
import { SearchBar } from "../searchBar/searchBar";
import Table from "../table";
import ApproveTable from "./approveTable";
import * as S from "./style";
import { APPROVE_MEMBER_TABLE_ITEM } from "@/constant/approve/approve.constants";
const Approve = () => {
  const { memberSearch, setMemberSearch } = useMemberSearchStore();
  return (
    <S.Main>
      <S.PendingMember>
        <S.SearchBox>
          <SearchBar value={memberSearch} onChange={setMemberSearch} />
        </S.SearchBox>
        <table>
          <Table constant={APPROVE_MEMBER_TABLE_ITEM} style={{ width: "85%" }} />
        </table>
        <S.PendingMemberMain>
          <S.PendingMemberList>
            <table>
              <ApproveTable />
            </table>
          </S.PendingMemberList>
        </S.PendingMemberMain>
      </S.PendingMember>
    </S.Main>
  );
};

export default Approve;

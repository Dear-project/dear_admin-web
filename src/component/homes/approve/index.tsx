"use client";
import { SearchBar } from "../searchBar/searchBar";
import Table from "../table";
import ApproveTable from "./approveTable";
import * as S from "./style";
import { APPROVE_MEMBER_TABLE_ITEM } from "@/constant/approve/approve.constants";
const Approve = () => {
  return (
    <S.Main>
      <S.PendingMember>
        <S.SearchBox>{/* <SearchBar /> */}</S.SearchBox>
        <table>
          <Table constant={APPROVE_MEMBER_TABLE_ITEM} style={{ width: "75%" }} />
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

import * as S from "./style";
import Table from "../table/index";
import MemberTable from "./memberTable/index";
import { SearchBar } from "../searchBar/searchBar";
import { MEMBER_TABLE_ITEMS } from "@/constant/member/Member.constant";
import { useMemberSearchStore } from "@/store/member";
import SkeletonComponent from "@/Components/common/skleton/index";
import ErrorBoundary from "@/Components/common/error";
import { Suspense, useState } from "react";
const Main = () => {
  const { memberSearch, setMemberSearch } = useMemberSearchStore();

  return (
    <S.Main>
      <S.member>
        <S.searchBox>
          <SearchBar onChange={setMemberSearch} value={memberSearch} />
        </S.searchBox>
        <table>
          <Table constant={MEMBER_TABLE_ITEMS} />
        </table>
        <S.memberMain>
          <S.memberList>
            <ErrorBoundary>
              <Suspense fallback={<SkeletonComponent height={500} />}>
                <MemberTable />
              </Suspense>
            </ErrorBoundary>
          </S.memberList>
        </S.memberMain>
      </S.member>
    </S.Main>
  );
};
export default Main;

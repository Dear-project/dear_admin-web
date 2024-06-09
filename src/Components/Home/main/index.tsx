import * as S from "./style";
import Table from "./table/index";
import MemberTable from "./memberTable";
import { SearchBar } from "../searchBar/searchBar";
import { MEMBER_TABLE_ITEMS } from "@/constant/member/Member.constant";
import { useMemberSearchStore } from "@/store/member";

const Main = () => {
  const { memberSearch, setMemberSearch } = useMemberSearchStore();

  return (
    <S.Main>
      <S.member>
        <S.searchBox>
          <SearchBar onChange={setMemberSearch} value={memberSearch} />
        </S.searchBox>
        <Table constant={MEMBER_TABLE_ITEMS} />
        <S.memberMain>
          <S.memberList>
            <MemberTable></MemberTable>
          </S.memberList>
        </S.memberMain>
      </S.member>
    </S.Main>
  );
};
export default Main;

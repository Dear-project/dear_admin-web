import * as S from "./style";
import Table from "./table/index"
import MemberTable from "./memberTable";
import {MEMBER_TABLE_ITEMS }from "@/constant/member/Member.constant"

const Main = () => {
    
  return (
    <S.Main>
      <S.member>
        <S.searchBox></S.searchBox>
     <Table constant={MEMBER_TABLE_ITEMS}/>
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

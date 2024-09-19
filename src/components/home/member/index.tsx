import * as S from "./style";
import Table from "../table/index";
import MemberTable from "./memberTable/index";
import { SearchBar } from "../searchBar/searchBar";
import { MEMBER_TABLE_ITEMS } from "@/constant/member/Member.constant";
import { useMemberSearchStore, useSelectClick } from "@/store/member";
import { Select } from "@/components/common/select/selectButton";
import { USER_STATUS } from "@/constant/userStatus/userStatus.constant";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";

const Member = () => {
  const { selectClick, setSelectClick } = useSelectClick();
  const { memberSearch, setMemberSearch } = useMemberSearchStore();

  return (
    <S.Main>
      <S.member>
        <S.headerBox>
          <S.selectBox>
            <Select items={USER_STATUS} value={selectClick} onChange={setSelectClick} zIndex={2} />
          </S.selectBox>
          <SearchBar onChange={setMemberSearch} value={memberSearch} />
        </S.headerBox>
        <table>
          <Table constant={MEMBER_TABLE_ITEMS} />
        </table>
        <S.memberMain>
          <S.memberList>
            {/* <ErrorBoundary>
              <Suspense fallback={<SkeletonComponent height={500} />}> */}
            <MemberTable />
            {/* </Suspense>
            </ErrorBoundary> */}
          </S.memberList>
        </S.memberMain>
      </S.member>
    </S.Main>
  );
};
export default Member;

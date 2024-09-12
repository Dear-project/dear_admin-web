import * as S from "./style";
import Table from "../table/index";
import MemberTable from "./memberTable/index";
import { SearchBar } from "../searchBar/searchBar";
import { MEMBER_TABLE_ITEMS } from "@/constant/member/Member.constant";
import { useMemberSearchStore , useSelectClick} from "@/store/member";
import UseMember from "@/hooks/Home/member/useMember";
import { selectList } from "@/constant/userStatus/userStatus.constant";

const Member = () => {
  const {selectClick}=useSelectClick();
  const { memberSearch, setMemberSearch } = useMemberSearchStore();
const {hadleSelect}=UseMember();


  return (
    <S.Main>
      <S.member>
        <S.headerBox>
          <S.selectBox>
            <S.selectMain value={selectClick} onChange={hadleSelect}>
              {selectList.map((item)=>(
                <option value={item.value} key={item.value}>
                  {item.name}
                </option>
              ))}
            </S.selectMain>
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

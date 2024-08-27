import * as S from "./style";
import DeclarationList from "./List";
import { SearchBar } from "../searchBar/searchBar";
import {useDeclarationrSearchStore} from "@/store/declaration/index";

const Declaration = () => {
const {DeclarationrSearchState, SetDeclarationrSearchState} = useDeclarationrSearchStore();
  return (
    <S.Main>
      <S.Direction>
        <S.searchBox>
      <SearchBar onChange={SetDeclarationrSearchState} value={DeclarationrSearchState}  />
        </S.searchBox>
        <S.DirectionMain>
          <DeclarationList />
        </S.DirectionMain>
      </S.Direction>
    </S.Main>
  );
};
export default Declaration;

import * as S from "./style";
import DeclarationList from "./List";

const Declaration = () => {
  return (
    <S.Main>
      <S.Direction>
        <S.searchBox></S.searchBox>
        <S.DirectionMain>
          <DeclarationList />
        </S.DirectionMain>
      </S.Direction>
    </S.Main>
  );
};
export default Declaration;

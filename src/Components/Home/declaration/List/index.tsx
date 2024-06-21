import * as S from "./style";
import { useGetDeclarationQuery } from "@/queries/declaration/query";

const DeclarationList = () => {
  const { data } = useGetDeclarationQuery();
  return (
    <S.DirectionList>
      {data?.data.map((item, idx) => (
        <S.DeclarationThead>
          <S.Title>{item.reportName}</S.Title>
          <S.ContentMain>
            <S.Content>
              {item.reason}
            </S.Content>
            <S.Date>{item.createdAt}</S.Date>
          </S.ContentMain>
        </S.DeclarationThead>
      ))}
    </S.DirectionList>
  );
};
export default DeclarationList;

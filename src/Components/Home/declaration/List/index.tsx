import * as S from "./style";
import { useGetDeclarationQuery } from "@/queries/declaration/query";
import dateTransform from "@/utils/banner/dateTransform";

const DeclarationList = () => {
  const { data } = useGetDeclarationQuery();
  const reversedData = data ? [...data.data].reverse() : [];

  return (
    <S.DirectionList>
      {reversedData.map((item, idx) => (
        <S.DeclarationThead key={idx}>
          <S.Title>신고자 = {item.reportName}</S.Title>
          <S.Title>신고 대상 이름 = {item.targetName}</S.Title>
          <S.ContentMain>
            <S.Content>{item.reason}</S.Content>
            <S.Date>{dateTransform.DateTime(item.dateTime)}</S.Date>
          </S.ContentMain>
        </S.DeclarationThead>
      ))}
    </S.DirectionList>
  );
};
export default DeclarationList;

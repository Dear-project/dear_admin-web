import * as S from "./style";
import { useGetDeclarationQuery } from "@/queries/declaration/query";
import dateTransform from "@/utils/banner/dateTransform";
import UseDeclaration from "@/hooks/Home/declaration/useDeclaration";
import DearCharacter from "@/assets/img/DearCharacter.svg";
import setting from "@/assets/img/home/ic_round-more-horiz.svg";
import Image from "next/image";

const DeclarationList = () => {
  const { data } = useGetDeclarationQuery();
  const reversedData = data ? [...data.data].reverse() : [];
  const { ...declaration } = UseDeclaration();
  return (
    <S.DirectionList>
      {reversedData?.length > 0 ? (
        reversedData?.map((item, idx) => (
          <S.DeclarationThead key={idx}>
            <S.Title>신고자 = {item.reportName}</S.Title>
            <S.Title>신고 대상 이름 = {item.targetName}</S.Title>
            <S.ContentMain>
              <S.Content>{item.reason}</S.Content>
              <S.Date>{dateTransform.DateTime(item.dateTime)}</S.Date>
            </S.ContentMain>
            <S.directionRejectButton>
              <Image src={setting} alt="설정" onClick={() => declaration.MemberReject(item)} />
            </S.directionRejectButton>
          </S.DeclarationThead>
        ))
      ) : (
        <S.NoneDeclarationWrap>
          <Image src={DearCharacter} alt="디어캐릭터" width={200} height={200} />
          <p>신고된 사용자가 없어요!</p>
        </S.NoneDeclarationWrap>
      )}
    </S.DirectionList>
  );
};
export default DeclarationList;

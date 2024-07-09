import * as S from "./style";
interface MoreButtonProps {
    Id: number;
    onClose:() => void;
  };

const MoreButton = ({Id , onClose}:MoreButtonProps) => {
  return (
    <S.Main onClick={onClose}>
      <S.MoreButtonMain idx={Id}>
        <S.suspensionButton>계정정지</S.suspensionButton>
        <S.deleteButton>계정삭제</S.deleteButton>
      </S.MoreButtonMain>
    </S.Main>
  );
};
export default MoreButton;

import * as S from "./style";
import UseMember from "@/hooks/Home/member/useMember";
interface MoreButtonProps {
    Id: number;
    onClose:() => void;
  };

const MoreButton = ({Id , onClose}:MoreButtonProps) => {
    const {}= UseMember();
    console.log(Id);
    
    
  return (
    <S.Main onClick={onClose}>
      <S.MoreButtonMain idx={Id}>
        <S.suspensionButton >계정정지</S.suspensionButton>
      </S.MoreButtonMain>
    </S.Main>
  );
};
export default MoreButton;

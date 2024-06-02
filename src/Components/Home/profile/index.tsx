import * as S from "./style";
import UseLogout from "src/hooks/Auth/useLogout";
import { ProfileAlertProps } from "src/types/profile/profileModel.types";

const ProfileAlert = ({ onClose }: ProfileAlertProps) => {
  const { logOut } = UseLogout();
  return (
    <S.Main onClick={onClose}>
      <S.AlertMain>
        <S.LogOut onClick={logOut}>로그아웃</S.LogOut>
      </S.AlertMain>
    </S.Main>
  );
};

export default ProfileAlert;
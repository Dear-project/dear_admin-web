import * as S from "./style";
import UseLogout from "@/hooks/Auth/useLogout";
import { ProfileAlertProps } from "@/types/profile/profileModel.types";

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
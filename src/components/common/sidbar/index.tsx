import Link from "next/link";
import Image from "next/image";
import Usesidebar from "@/hooks/Home/sidebar/usesidebar";
import logo from "@/assets/img/DEAR2.png";
import member from "@/assets/img/home/Vector2.png";
import chat from "@/assets/img/home/chat2.png";
import banner from "@/assets/img/home/page_info2.png";
import member2 from "@/assets/img/home/Vector.png";
import chat2 from "@/assets/img/home/chat.png";
import banner2 from "@/assets/img/home/page_info.png";
import defaultImg from "@/assets/img/home/Avatar1.png";
import Logout from "../../Home/profile/index";
import {  usePathname } from "next/navigation";
import * as S from "./style";
import { useGetProfileInfo } from "@/queries/Profile/Profile.query";
const Sidebar = () => {
const {data}=useGetProfileInfo();
  const { ...sidebar } = Usesidebar();
  const pathname = usePathname();

  return (
    <S.sidebar>
      <S.Logo>
        <Image src={logo} alt="로고" />
      </S.Logo>
      <S.sidecontext>
        <S.navigation>
          <Link href={"/"}>
            <S.sideblock $isSelect={"/" == pathname ? true : false}>
              <Image src={"/" == pathname ? member : member2} alt="구성원" />
              <span>구성원</span>
            </S.sideblock>
          </Link>
          <Link href={"/declaration"}>
            <S.sideblock $isSelect={"/declaration" == pathname ? true : false}>
              <Image
                src={"/declaration" == pathname ? chat : chat2}
                alt="문의"
              />
              <span>신고문의</span>
            </S.sideblock>
          </Link>
          <Link href={"/banner"}>
            <S.sideblock $isSelect={"/banner" == pathname ? true : false}>
              <Image
                src={"/banner" == pathname ? banner : banner2}
                alt="문의"
              />
              <span>배너</span>
            </S.sideblock>
          </Link>
        </S.navigation>
      </S.sidecontext>
      <S.sideprofile onClick={sidebar.OpenProfileSetting}>
        <S.profileInfo>
          {" "}
          <Image src={defaultImg} alt="profile"></Image>
        </S.profileInfo>
        <S.profileInfo>
          <span>{data?.data.name}</span>
        </S.profileInfo>
      </S.sideprofile>
      {sidebar.isProfileModel && <Logout onClose={sidebar.OpenProfileSetting}  />}
    </S.sidebar>
  );
};

export default Sidebar;

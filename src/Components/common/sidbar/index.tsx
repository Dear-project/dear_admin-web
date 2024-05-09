import Link from "next/link";
import Image from "next/image";
import Usesidebar from "@/hooks/Home/sidebar/usesidebar";
import logo from "@/assets/img/DEAR2.png";
import member from "@/assets/img/home/Vector2.png";
import chat from "@/assets/img/home/chat2.png";
import banner  from "@/assets/img/home/page_info2.png"
import * as S from "./style";



const Sidebar = () => {
  const { profileImg } = Usesidebar();


  return (
    <S.sidebar>
      <S.Logo>
        <Image src={logo} alt="로고" />
      </S.Logo>
      <S.sidecontext>
        <S.navigation>
          <S.sideblock >
            <Image src={member} alt="구성원" />
            <Link href={"/"}>구성원</Link>
          </S.sideblock>
          <S.sideblock>
            <Image src={chat} alt="문의" />
            <Link href={"/declaration"}>신고문의</Link>
          </S.sideblock>
          <S.sideblock>
            <Image src={banner} alt="문의" />
            <Link href={"/banner"}>배너</Link>
          </S.sideblock>
        </S.navigation>
      </S.sidecontext>
      <S.sideprofile>
        <div>{profileImg}</div>
      </S.sideprofile>
    </S.sidebar>
  );
};
export default Sidebar;

"use client";
import * as S from "./style";
import BannerList from "./bannerList";
const Banner = () => {
  return (
    <S.Main>
      <S.bannerListArea>
        <S.bannerList>
            <span>배너목록</span>
            <BannerList/>
        </S.bannerList>
      </S.bannerListArea>
      <S.bannerSubmitArea>
        <S.bannerFrom></S.bannerFrom>
      </S.bannerSubmitArea>

    </S.Main>
  );
};
export default Banner;

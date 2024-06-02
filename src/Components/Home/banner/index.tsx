"use client";
import * as S from "./style";
import BannerList from "./bannerList";
import BannerFrom from "./bannerForm/index";
const Banner = () => {
  return (
    <S.Main>
      <S.bannerListArea>
        <S.bannerList>
          <span>배너목록</span>
          <BannerList />
        </S.bannerList>
      </S.bannerListArea>
      <S.bannerSubmitArea>
        <S.bannerFrom>
          <BannerFrom />
        </S.bannerFrom>
      </S.bannerSubmitArea>
    </S.Main>
  );
};
export default Banner;

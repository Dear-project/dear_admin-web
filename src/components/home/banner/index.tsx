"use client"
import * as S from "./style";
import BannerList from "./bannerList/index";
import BannerFrom from "./bannerForm/index";
import { useGetBannersQuery } from "@/queries/banner/bannerUpload.query";
const Banner = () => {
  const { data } = useGetBannersQuery();
  
  
  return (
    <S.Main>
      <S.bannerListArea>
        <S.bannerList>
          <span>배너목록</span>
          <S.bannerOverList >
          {data?.data.map((data , index) => (            
            <BannerList  key={index} data={data}/>
          ))}
          </S.bannerOverList>
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




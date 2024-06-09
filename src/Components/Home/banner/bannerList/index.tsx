import {
  BannerArea,
  Bannerinfo,
  BannerTitle,
  BannerImg,
  BannerDeleteButton,
} from "./style";
import Image from "next/image";
import BannerImge from "@/assets/img/home/Group 383.png";
import { Banner } from "@/types/banner/banner.type";
import dateTransform from "@/utils/banner/dateTransform";

interface Props {
    data: Banner;
  }

const BannerList = ({ data }: Props) => {
    const handleDateTime = dateTransform.hyphen(data.expireAt); 

  return (
    <BannerArea>
      <Bannerinfo>
        <BannerTitle>
          <span style={{ fontSize: "17px" }}>Dear</span>
        </BannerTitle>
        <BannerImg>
          <Image src={BannerImge} alt="배너이미지" />
        </BannerImg>
        <BannerDeleteButton>삭제</BannerDeleteButton>
      </Bannerinfo>
    </BannerArea>
  );
};
export default BannerList;

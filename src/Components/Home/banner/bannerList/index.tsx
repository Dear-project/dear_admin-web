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
import UseHandleBanner from "@/hooks/Home/banner/useHandleBanner";
interface Props {
  data: Banner;
}

const BannerList = ({ data }: Props) => {
  const { deleteBanner } = UseHandleBanner();
  const handleDateTime = dateTransform.hyphen(data.expiredAt);
  return (
    <BannerArea>
      <Bannerinfo>
        <BannerTitle>
          <span style={{ fontSize: "17px" }}>{data.title}</span>
        </BannerTitle>
        <BannerImg>
          <Image
            src={data.imagePath !== null ? data.imagePath : BannerImge}
            alt="배너이미지"
            width={100}
            height={100}
          />
        </BannerImg>
        <BannerDeleteButton onClick={() => deleteBanner(data.id)}>
          삭제
        </BannerDeleteButton>
      </Bannerinfo>
    </BannerArea>
  );
};
export default BannerList;

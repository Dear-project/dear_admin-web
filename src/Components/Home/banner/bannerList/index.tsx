import {BannerArea,Bannerinfo,BannerTitle,BannerImg,BannerDeleteButton} from "./style"
import Image from "next/image";
import Banner from "@/assets/img/home/Group 383.png";
const BannerList =()=>{
    return(
        <BannerArea>
            <Bannerinfo>
                <BannerTitle><span style={{fontSize:"17px"}}>Dear</span></BannerTitle>
                <BannerImg>
                <Image src={Banner} alt="배너이미지"/>
                </BannerImg>
                <BannerDeleteButton >삭제</BannerDeleteButton>
            </Bannerinfo>
        </BannerArea>
    )
}
export default BannerList;
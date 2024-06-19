import { BannersResponse } from "../../types/banner/banner.type";

export interface BannerRepository {
  

  postBanners(uploadData: PostBannerParam): Promise<Response>;

  getBanners(): Promise<BannersResponse>;

  deleteBannerById({ id }: DeleteBannerByIdParam): Promise<Response>;
}

export interface PostBannerParam {
  expireAt: string;
  image: string;
  title: string;
  url: string;
}


export interface DeleteBannerByIdParam {
  id: number;
}
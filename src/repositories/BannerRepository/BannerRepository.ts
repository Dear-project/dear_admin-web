import { BannersResponse } from "../../types/banner/banner.type";

export interface BannerRepository {
  postBanners(uploadData: PostBannerParam): Promise<PostBannerResponse>;

  getBanners(): Promise<BannersResponse>;

  deleteBannerById({ id }: DeleteBannerByIdParam): Promise<Response>;
}

export interface PostBannerParam {
  title: string;
  url: string;
  expiredAt: string;
}

export interface PostBannerResponse {
  data: {
    id: number;
  };
}

export interface DeleteBannerByIdParam {
  id: number;
}

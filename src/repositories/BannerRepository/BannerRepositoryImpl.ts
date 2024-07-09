import {
  PostBannerParam,
  BannerRepository,
  DeleteBannerByIdParam,
  PostBannerResponse,
} from "./BannerRepository";
import dearAxios from "@/libs/axios/CustomAxios";
import { BannersResponse } from "../../types/banner/banner.type";

class BannerRepositoryImpl implements BannerRepository {
  public async getBanners(): Promise<BannersResponse> {
    const { data } = await dearAxios.get("/banner", {
      params: { page: 1, size: 20 },
    });
    return data;
  }

  public async postBanners(uploadData: PostBannerParam): Promise<PostBannerResponse> {
    const { data } = await dearAxios.post("/banner", uploadData);
    return data;
  }

  public async deleteBannerById({
    id,
  }: DeleteBannerByIdParam): Promise<Response> {
    const { data } = await dearAxios.delete(`/banner/${id}`);
    return data;
  }
}

export default new BannerRepositoryImpl();

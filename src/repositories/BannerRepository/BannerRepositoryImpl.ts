import {
  PostBannerParam,
  BannerRepository,
  DeleteBannerByIdParam,
  PostBannerResponse,
} from "./BannerRepository";
import dearV1Axios from "@/libs/axios/CustomAxios";
import { BannersResponse } from "../../types/banner/banner.type";

class BannerRepositoryImpl implements BannerRepository {
  public async getBanners(): Promise<BannersResponse> {
    const { data } = await dearV1Axios.get("/banner", {
      params: { page: 1, size: 20 },
    });
    return data;
  }

  public async postBanners(uploadData: PostBannerParam): Promise<PostBannerResponse> {
    const { data } = await dearV1Axios.post("/banner", uploadData);
    return data;
  }

  public async deleteBannerById({
    id,
  }: DeleteBannerByIdParam): Promise<Response> {
    const { data } = await dearV1Axios.delete(`/banner/${id}`);
    return data;
  }
}

export default new BannerRepositoryImpl();

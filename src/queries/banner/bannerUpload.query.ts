import { AxiosError } from "axios";
import {
  useMutation,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { BannersResponse } from "@/types/banner/banner.type";
import BannerRepositoryImpl from "../../repositories/BannerRepository/BannerRepositoryImpl";
import {
  DeleteBannerByIdParam,
  PostBannerParam,
} from "../../repositories/BannerRepository/BannerRepository";
import { DearQueryKey } from "../queryKeys";

export const useUploadBannerMutation = () => {
  const mutation = useMutation({
    mutationFn: (bannerData: PostBannerParam) =>
      BannerRepositoryImpl.postBanners(bannerData),
  });
  return mutation;
};

export const useGetBannersQuery = () => {
  const useGetBanner = useSuspenseQuery<BannersResponse, AxiosError, BannersResponse, string[]>({
    queryKey: [DearQueryKey.banner.get],
    queryFn: async() => BannerRepositoryImpl.getBanners(),
    staleTime: 1000 * 60 * 60,
    refetchInterval : 1000 * 60 * 60,
  }
  )
  
  return useGetBanner
};

export const useDeleteBannerMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ id }: DeleteBannerByIdParam) =>
      BannerRepositoryImpl.deleteBannerById({ id }),
  });

  return mutation;
};

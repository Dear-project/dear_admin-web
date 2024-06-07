import { useSuspenseQuery } from "@tanstack/react-query";
import { showToast } from "@/libs/Toast/swal";
import { AxiosError } from "axios";
import { ProfileType } from "@/types/profile/profileModel.types";
import ProfileRepositoryImpl from "@/repositories/ProfileRepository/ProfileRepositoryImpl";
import { DearQueryKey } from "../queryKeys";

export const useGetProfileInfo = () => {
  const useGetprofile = useSuspenseQuery<ProfileType, AxiosError<ProfileType>>({
    queryKey: [DearQueryKey],
    queryFn: async () => ProfileRepositoryImpl.getProfileInfo(),

  });
  return useGetprofile
};


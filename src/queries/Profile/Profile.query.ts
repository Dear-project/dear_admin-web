import { UseQueryOptions, useQuery, useQueries } from "@tanstack/react-query";
import { showToast } from "@/libs/Toast/swal";
import { AxiosError } from "axios";
import { ProfileType } from "@/types/profile/profileModel.types";
import ProfileRepositoryImpl from "@/repositories/ProfileRepository/ProfileRepositoryImpl";
import Token from "@/libs/Token/Token";
import { DearQueryKey } from "../queryKeys";

export const useGetProfileInfo = () => {
  const profileQuery = useQuery<ProfileType, AxiosError,ProfileType, string[]>(
    DearQueryKey.profile.getMy,
    () => {
       ProfileRepositoryImpl.getProfileInfo();
      
    }
  );

  return profileQuery;
};


import { useQuery} from "@tanstack/react-query";
import { showToast } from "@/libs/Toast/swal";
import { AxiosError } from "axios";
import { ProfileType } from "@/types/profile/profileModel.types";
import ProfileRepositoryImpl from "@/repositories/ProfileRepository/ProfileRepositoryImpl";
import { DearQueryKey } from "../queryKeys";


export const useGetProfileInfo = () => {
  const useGetprofile = useQuery<ProfileType, AxiosError<ProfileType>>({
    queryKey: [DearQueryKey],
    queryFn: async () => ProfileRepositoryImpl.getProfileInfo(),
    staleTime: 3600000, // 1시간
     refetchInterval: 3600000, // 1시간
  }
  
);
  return useGetprofile
};


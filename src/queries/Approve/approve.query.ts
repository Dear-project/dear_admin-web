import { ScheuduleStatus, getPendingMemberResponse } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { DearQueryKey } from "../queryKeys";
import ApproveRepositoryImpl from "@/repositories/ApproveRepostiory/ApproveRepositoryImpl";

export const useGetPendingMemberList = (page: number, status: ScheuduleStatus) => {
  const queryClient = useQueryClient();
  const useGetPendingMember = useQuery<getPendingMemberResponse, AxiosError, getPendingMemberResponse, string[]>({
    queryKey: [DearQueryKey.approve.getMember],
    queryFn: () => ApproveRepositoryImpl.getPendingMember(page, status),
    gcTime: 5 * 60 * 10000,
    refetchInterval: 3600000,
  });

  queryClient.invalidateQueries({ queryKey: [DearQueryKey.profile.getMy] });
  return useGetPendingMember;
};

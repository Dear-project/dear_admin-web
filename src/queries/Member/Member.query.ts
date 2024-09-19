import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { MemberType, MemeberResponse } from "@/types/member/member.type";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";
import { AxiosError } from "axios";
import { DearQueryKey } from "../queryKeys";
import { RejectPrpos } from "@/types/member/member.type";

export const useGetMemberList = (userStatus: string) => {
  const queryClient = useQueryClient();
  const useGetMember = useQuery<MemeberResponse, AxiosError, MemeberResponse, string[]>({
    queryKey: [DearQueryKey.member.getMember],
    queryFn: () => MemberRepositoryImpl.getMemberList(userStatus),
    gcTime: 5 * 60 * 1000, // 5분
    refetchInterval: 3600000, // 1시간
  });
  queryClient.invalidateQueries({ queryKey: [DearQueryKey.profile.getMy] });
  return useGetMember;
};

export const useMemebrQuit = () => {
  const mutate = useMutation({
    mutationFn: ({ id, comment }: RejectPrpos) => MemberRepositoryImpl.rejectMember({ id, comment }),
  });
  return mutate;
};

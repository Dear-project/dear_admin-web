import { useSuspenseQuery, useQuery } from "@tanstack/react-query";
import { MemberType, MemeberResponse } from "@/types/member/member.type";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";
import { AxiosError } from "axios";
import { DearQueryKey } from "../queryKeys";

export const useGetMemberList = () => {
  const useGetMember = useSuspenseQuery<
  MemeberResponse,
    AxiosError,
    MemeberResponse,
    string[]
  >({ 
    queryKey: [DearQueryKey.member.getMember],
    queryFn: () => MemberRepositoryImpl.getMemberList(),
    gcTime: 5 * 60 * 1000, // 5분
    refetchInterval: 3600000, // 1시간
  });
  return useGetMember.data;
};

export const memebrQuit = ()=>{

}


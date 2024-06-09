import { useSuspenseQuery } from "@tanstack/react-query";
import { MemberType , MemeberResponse} from "@/types/member/member.type";
import MemberRepositoryImpl from "@/repositories/MemberRepository/MemberRepositoryImpl";
import { AxiosError } from "axios";
import { DearQueryKey } from "../queryKeys";

export const useGetMemberList = () => {
   const useGetMember = useSuspenseQuery<MemberType, AxiosError<MemberType>, MemeberResponse>({
     queryKey: [DearQueryKey],
     queryFn: async () => MemberRepositoryImpl.getMemberList(),
     staleTime: 3600000, // 1시간
     refetchInterval: 3600000, // 1시간
   });
   return useGetMember.data;
 };
 
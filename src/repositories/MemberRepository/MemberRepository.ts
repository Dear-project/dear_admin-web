import { MemberType } from "@/types/member/member.type";
export interface MemberRepository {
  getMemberList(): Promise<MemberType>;
}

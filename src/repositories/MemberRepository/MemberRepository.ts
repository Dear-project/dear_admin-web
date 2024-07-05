import { MemeberResponse } from "@/types/member/member.type";
export interface MemberRepository {
  getMemberList(): Promise<MemeberResponse>;
}

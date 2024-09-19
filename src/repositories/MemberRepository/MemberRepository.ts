import { MemeberResponse, RejectPrpos } from "@/types/member/member.type";
export interface MemberRepository {
  getMemberList(userStatus: string): Promise<MemeberResponse>;
  rejectMember({ id, comment }: RejectPrpos): Promise<void>;
}

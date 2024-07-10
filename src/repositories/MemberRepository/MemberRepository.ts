import { MemeberResponse, RejectPrpos } from "@/types/member/member.type";
export interface MemberRepository {
  getMemberList(): Promise<MemeberResponse>;
  rejectMember({Id,commnet}:RejectPrpos):Promise<RejectMemberResponse>
}


export interface RejectMemberResponse extends Response {}
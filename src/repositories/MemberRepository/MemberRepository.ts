import { MemeberResponse, RejectPrpos } from "@/types/member/member.type";
export interface MemberRepository {
  getMemberList(userStatus:string): Promise<MemeberResponse>;
  rejectMember({Id,commnet}:RejectPrpos):Promise<RejectMemberResponse>
}


export interface RejectMemberResponse extends Response {}

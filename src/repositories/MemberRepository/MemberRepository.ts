import { MemeberResponse } from "@/types/member/member.type";
export interface MemberRepository {
  getMemberList(): Promise<MemeberResponse>;
  rejectMember(id: UserID): Promise<RejectMemberResponse>;
}

export interface RejectMemberResponse {
  data: {
    comment: string;
  };
}
export interface UserID {
  id: number;
}

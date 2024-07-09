import dearAxios from "@/libs/axios/CustomAxios";
import { MemeberResponse } from "@/types/member/member.type";
import { MemberRepository, RejectMemberResponse, UserID } from "./MemberRepository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMemberList(): Promise<MemeberResponse> {
    try {
      const { data } = await dearAxios.get("/user");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  public async rejectMember(id: UserID): Promise<RejectMemberResponse> {
    try {
      const { data } = await dearAxios.patch(`/user/reject${ id }`);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
}

export default new MemberRepositoryImpl();

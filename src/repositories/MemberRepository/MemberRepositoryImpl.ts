import dearAxios from "@/libs/axios/CustomAxios";
import { MemeberResponse } from "@/types/member/member.type";
import { MemberRepository } from "./MemberRepository";
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
  public async deleteMember(){
    
  }
}
export default new MemberRepositoryImpl();

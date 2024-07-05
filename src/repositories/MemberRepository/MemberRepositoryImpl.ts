import dearV1Axios from "@/libs/axios/CustomAxios";
import { MemeberResponse } from "@/types/member/member.type";
import { MemberRepository } from "./MemberRepository";
class MemberRepositoryImpl implements MemberRepository {
  public async getMemberList(): Promise<MemeberResponse> {
    try {
      const { data } = await dearV1Axios.get("/user");
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
export default new MemberRepositoryImpl();

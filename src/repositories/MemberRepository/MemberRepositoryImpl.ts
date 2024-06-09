import  dearV1Axios  from "@/libs/axios/CustomAxios";
import { MemberType } from "@/types/member/member.type";
import { MemberRepository } from "./MemberRepository";
class MemberRepositoryImpl implements MemberRepository{
    public async getMemberList(): Promise<MemberType>{
        const {data} = await dearV1Axios.get("/user");
        return data
    }
}
export default new MemberRepositoryImpl();
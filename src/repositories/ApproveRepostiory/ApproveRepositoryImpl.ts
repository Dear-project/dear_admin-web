import dearAxios from "@/libs/axios/CustomAxios";
import { ApproveRepository, postApproveMember, getPendingMemberResponse,postApproveProps } from "./ApproveRepository";

class ApproveRepositoryImpl implements ApproveRepository {
  public async getPendingMember(page: number, status: string): Promise<getPendingMemberResponse> {
    try {
      const { data } = await dearAxios.get(`/schedule/status?page=${page}&size=20&scheduleStatus=${status}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
  public async postApproveMember(ApproveData:postApproveProps){
    try{
      const {data} = await dearAxios.post('/schedule', ApproveData)
      return data
    }catch(error){
      throw error;
    }
  }
}

export default new ApproveRepositoryImpl();

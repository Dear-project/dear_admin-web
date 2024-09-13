import dearAxios from "@/libs/axios/CustomAxios";
import { ApproveRepository, ScheuduleStatus, getPendingMemberResponse } from "./ApproveRepository";

class ApproveRepositoryImpl implements ApproveRepository {
  public async getPendingMember(page: number, status: ScheuduleStatus): Promise<getPendingMemberResponse> {
    try {
      const { data } = await dearAxios.get(`/schedule/status?page=${page}&size=20&scheduleStatus=${status}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApproveRepositoryImpl();

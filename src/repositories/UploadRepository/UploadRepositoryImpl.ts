import dearAxios from "@/libs/axios/CustomAxios";
import {
  PostUploadParams,
  PostUploadResponse,
  UploadRepository,
} from "./UploadRepository";

class UploadRepositoryImpl implements UploadRepository {
  public async postUpload({
    formdata,
    dataID,
  }: PostUploadParams): Promise<PostUploadResponse> {
    const { data } = await dearAxios.post(`/banner/${dataID.id}`, formdata);
    return data;
  }
}

export default new UploadRepositoryImpl();

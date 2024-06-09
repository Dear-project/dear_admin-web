import dearV1Axios  from "@/libs/axios/CustomAxios";
import {
  PostUploadParams,
  PostUploadResponse,
  UploadRepository,
} from "./UploadRepository";

class UploadRepositoryImpl implements UploadRepository {
  public async postUpload({
    formData,
  }: PostUploadParams): Promise<PostUploadResponse> {
    const { data } = await dearV1Axios.post("/upload", formData);
    return data;
  }
}

export default new UploadRepositoryImpl();
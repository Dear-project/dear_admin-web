import { Response } from "@/types/util/Auth/response.type";

export interface UploadRepository {
  postUpload({
    formdata,
    dataID,
  }: PostUploadParams): Promise<PostUploadResponse>;
}

export interface PostUploadParams {
  
  formdata: FormData;
  dataID: {
    id: number;
  };
}

export interface PostUploadResponse extends Response {}

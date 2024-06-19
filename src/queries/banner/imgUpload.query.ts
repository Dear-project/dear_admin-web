import { PostUploadParams } from "../../repositories/UploadRepository/UploadRepository";
import UploadRepositoryImpl from "../../repositories/UploadRepository/UploadRepositoryImpl";
import { useMutation } from "@tanstack/react-query";

export const useUploadImageMutation = () => {
  const mutation = useMutation({
    mutationFn: ({ formdata, dataID }: PostUploadParams) =>
      UploadRepositoryImpl.postUpload({ formdata, dataID }),
  });
  return mutation;
};

import { PostUploadParams } from "../../repositories/UploadRepository/UploadRepository";
import UploadRepositoryImpl from "../../repositories/UploadRepository/UploadRepositoryImpl";
import { useMutation } from "@tanstack/react-query";

export const useUploadImageMutation = () => {
  const mutation = useMutation({
    mutationFn:({ formData }: PostUploadParams) =>
      UploadRepositoryImpl.postUpload({ formData })
  });
  return mutation;
};
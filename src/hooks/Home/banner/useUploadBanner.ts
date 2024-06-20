import { showToast } from "@/libs/Toast/swal";
import { useUploadBannerMutation } from "@/queries/banner/bannerUpload.query";
 import { useUploadImageMutation } from "@/queries/banner/imgUpload.query";
import { ChangeEvent, useState } from "react";
import dayjs from "dayjs";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";

const useUplodaBanner = () => {
  const uploadBannerMutation = useUploadBannerMutation();
  const [fileName, setFileName] = useState<File>();
   const uploadMutation = useUploadImageMutation();
  const [uploadData, setUploadData] = useState({
    title: "",
    url: "",
    image: "",
    expiredAt: "",
  });
  const [formData, setFormData] = useState<FormData>(new FormData());
  const queryClient = useQueryClient();


  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      let image = e.target.files[0];

      setFileName(image);
      const formData = new FormData();
      formData.append("files", image);
      setFormData(formData)
      setUploadData((prev) => ({ ...prev, image: image.name }));
    }
  };

  const onChangeUploadData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUploadData((prev) => ({ ...prev, [name]: value }));
  };

  const checkRequiredRequest = () => {
    const { title, url, image, expiredAt } = uploadData;

    if (title.trim() === "") {
      showToast("error", "제목을 입력해주세요.");
      return false;
    }

    if (url.trim() === "") {
      showToast("error", "링크를 입력해주세요.");
      return false;
    }
    if (image.trim() === "") {
      showToast("error", "이미지를 선택해주세요");
      return false;
    }
    if (expiredAt === "") {
      showToast("error", "날짜를 선택해주세요.");
      return false;
    }

    if (dayjs(expiredAt).isBefore(dayjs().subtract(1, "day"))) {
      showToast("error", "오늘 날짜 이후로 선택해주세요.");
      return false;
    }

    return true;
  };


  const onSubmitUploadData = () => {
    if (checkRequiredRequest()) {
      const { image, ...requestData } = uploadData;

      uploadBannerMutation.mutate(
        {
          ...requestData,
          expiredAt: requestData.expiredAt + "T01:23:42.354Z",
        },
        {
          onSuccess: (res) => {
            uploadMutation.mutate(
              {
                formdata : formData,
                dataID: { id: res.data.id },
              },
              {
                onSuccess: (data) => {
              showToast("success","배너 생성성공")
              queryClient.invalidateQueries({queryKey:[DearQueryKey.banner.get]})
                },
              }
            );

            setUploadData({
              expiredAt: "",
              title: "",
              image: "",
              url: "",
            });
          },
          onError: () => {
            showToast("error", "배너 등록 실패");
          },
        }
      );
    }
  };

  return {
    fileName,
    onSubmitUploadData,
    onChangeUploadData,
    onChangeImage,
    uploadData,
  };
};

export default useUplodaBanner;

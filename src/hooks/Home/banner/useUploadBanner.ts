import { showToast } from "@/libs/Toast/swal";
import { useUploadBannerMutation } from "@/queries/banner/bannerUpload.query";
import { useUploadImageMutation } from "@/queries/banner/imgUpload.query";
import { ChangeEvent, useState } from "react";
import dayjs from "dayjs";

const useUplodaBanner = () => {

  const uploadBannerMutation = useUploadBannerMutation();
  const [fileName, setFileName] = useState<File>();
  const uploadMutation = useUploadImageMutation();
  const [uploadData, setUploadData] = useState({
    expireAt: "",
    image: "",
    title: "",
    url: "",
  });

  const onChangeImage = (event: ChangeEvent<HTMLInputElement> | any) => {
    let image: File;
    image = event.target.files[0];
    setFileName(image);

    const formData = new FormData();
    formData.append("file", image);

    uploadMutation.mutate(
      {
        formData,
      },
      {
        onSuccess: (data) => {
          setUploadData((prev) => ({ ...prev, image: data.data }));
        },
      }
    );
  };

  const onChangeUploadData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUploadData((prev) => ({ ...prev, [name]: value }));
  };

  const checkRequiredRequest = () => {
    const { title, url, image, expireAt } = uploadData;

    if (title.trim() === "") {
      showToast("error","제목을 입력해주세요.");
      return false;
    }

    if (url.trim() === "") {
      showToast("error","링크를 입력해주세요.");
      return false;
    }

    if (image === "") {
      showToast("error","이미지를 선택해주세요.");
      return false;
    }

    if (expireAt === "") {
      showToast("error","날짜를 선택해주세요.");
      return false;
    }

    if (dayjs(expireAt).isBefore(dayjs().subtract(1, "day"))) {
      showToast("error","오늘 날짜 이후로 선택해주세요.");
      return false;
    }

    return true;
  };

  const onSubmitUploadData = () => {
    if (checkRequiredRequest()) {
      uploadBannerMutation.mutate(
        {
          ...uploadData,
          expireAt: uploadData.expireAt + "T23:59:59",
        },
        {
          onSuccess: () => {
            setUploadData({
              expireAt: "",
              image: "",
              title: "",
              url: "",
            });
          },
          onError: () => {
            showToast("error","배너 등록 실패");
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
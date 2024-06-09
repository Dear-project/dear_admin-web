import * as S from "./style";
import useUplodaBanner from "@/hooks/Home/banner/useUploadBanner";
const BannerFrom = () => {
  const {
    onChangeUploadData,
    onSubmitUploadData,
    onChangeImage,
    fileName,
    uploadData,
  } = useUplodaBanner();
  return (
    <S.bannerMain>
      <S.bannerBlock>
        <span>제목</span>
        <S.bannerInput
          name="title"
          placeholder="제목을 입력해주세요."
          value={uploadData.title}
          onChange={onChangeUploadData}
        ></S.bannerInput>
      </S.bannerBlock>
      <S.bannerBlock>
        <span>보관기간</span>
        <S.bannerInput
          type="date"
          name="expireAt"
          value={uploadData.expireAt}
          onChange={onChangeUploadData}
        ></S.bannerInput>
      </S.bannerBlock>
      <S.bannerBlock style={{ width: "350px" }}>
        <span>링크</span>
        <S.bannerInput
          name="url"
          value={uploadData.url}
          onChange={onChangeUploadData}
          placeholder="링크를 작성해주세요"
        ></S.bannerInput>
      </S.bannerBlock>
      <S.bannerBlock style={{ width: "203px" }}>
        <span>이미지</span>
        <S.bannerInput
          value={uploadData.image ? fileName?.name : "파일을 선택해주세요"}
          disabled
        ></S.bannerInput>
      </S.bannerBlock>
      <S.bannerBlock style={{ width: "100px" }}>
        <S.bannerFileLabel
          style={{ marginLeft: "20px", marginTop: "25px", width: "98px" }}
          htmlFor="file"
        >
          이미지 선택
        </S.bannerFileLabel>
        <S.bannerInput
          style={{
            width: "1px",
            height: "1px",
            padding: "0",

            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            border: "0",
          }}
          name="image"
          onChange={onChangeImage}
          type="file"
          id="file"
        ></S.bannerInput>
      </S.bannerBlock>
      <S.bannerSubmit onClick={onSubmitUploadData}>등록</S.bannerSubmit>
    </S.bannerMain>
  );
};
export default BannerFrom;

import React, { Dispatch, SetStateAction } from "react";
import * as S from "./style";
import { useSchoolAdditionalData } from "@/store/approve";
import useApprove from "@/hooks/Home/approve/useApprove";

interface Props {
  isOpen: boolean;
  schoolSeq: string;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const ApproveModal = ({ schoolSeq, isOpen, setIsOpen }: Props) => {
  const { additionalData } = useSchoolAdditionalData();
  const { handleAdditionalData, memberApprove } = useApprove();

  return (
    <>
      {isOpen && (
        <S.ApproveModalWrap onClick={() => setIsOpen((prev) => !prev)}>
          <S.Main>
            <S.Title>학교에 대한 추가정보를 입력해주세요.</S.Title>
            <S.InputWrap>
              <S.Description>url: </S.Description>
              <S.Input
                placeholder="학사일정 url을 입력해주세요."
                value={additionalData.url}
                onChange={handleAdditionalData}
                name="url"
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.Description>week tag: </S.Description>
              <S.Input
                placeholder="요일이 나외있는 태그네임.클래스네임을 입력주세요."
                value={additionalData.weektag}
                onChange={handleAdditionalData}
                name="weektag"
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.Description>day tag: </S.Description>
              <S.Input
                placeholder="날짜가 나외있는 태그네임.클래스네임을 입력주세요."
                value={additionalData.daytag}
                onChange={handleAdditionalData}
                name="daytag"
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.Description>schedule tag: </S.Description>
              <S.Input
                placeholder="요일이 나외있는 태그네임.클래스네임을 입력주세요."
                value={additionalData.scheduletag}
                onChange={handleAdditionalData}
                name="scheduletag"
              />
            </S.InputWrap>
            <S.InputWrap>
              <S.Description>scheudleAttr: </S.Description>
              <S.Input
                placeholder="일정이 나와있는 속성의 이름을 입력해주세요."
                value={additionalData.scheduleAttr}
                onChange={handleAdditionalData}
                name="scheduleAttr"
              />
            </S.InputWrap>
            <S.Button onClick={() => memberApprove(schoolSeq)}>승인하기</S.Button>
          </S.Main>
        </S.ApproveModalWrap>
      )}
    </>
  );
};

export default ApproveModal;

"use client";
import Image from "next/image";
import * as S from "./style";
import MoreImage from "@/assets/img/home/ic_round-more-horiz.svg";
import convertText from "@/utils/textSplit/comvertText";
import { useGetPendingMemberList } from "@/queries/Approve/approve.query";
import { statusTransform } from "@/utils/approve/statusTransform";
import useApprove from "@/hooks/Home/approve/useApprove";
import { useApproveSelectClick } from "@/store/approve";
import { useMemberSearchStore } from "@/store/member";
import { FilterApproveList } from "@/utils/approve/filterApproveList";

const ApproveTable = () => {
  const { selectClick } = useApproveSelectClick();
  const { data } = useGetPendingMemberList(1, selectClick);
  const { memberApprove, approve } = useApprove();
  const { memberSearch } = useMemberSearchStore();
  return (
    <>
      <S.TBody style={{ width: "100%" }}>
        {selectClick === "ACTIVE"
          ? FilterApproveList(memberSearch, data?.data!).map((approve, idx) => (
              <S.TR key={idx} style={{ width: "100%", gap: "10.5%", justifyContent: "normal" }}>
                <S.TD style={{ width: "10.5%" }}>{convertText.omissionText(approve.schoolName)}</S.TD>
                <S.TD style={{ width: "37.5%" }}>{approve.studentNum}/5</S.TD>
                <S.TD style={{ width: "13%", alignItems: "flex-start" }}>
                  {statusTransform(approve.scheduleStatus)}
                </S.TD>
              </S.TR>
            ))
          : data?.data.map((approve, idx) => (
              <S.TR key={idx} style={{ width: "100%" }}>
                <S.TD style={{ width: "10.5%" }}>{convertText.omissionText(approve.schoolName)}</S.TD>
                <S.TD style={{ width: "37.5%" }}>{approve.studentNum}/5</S.TD>
                <S.TD style={{ width: "13%", alignItems: "flex-start" }}>
                  {statusTransform(approve.scheduleStatus)}
                </S.TD>
                <Image
                  src={MoreImage}
                  alt="더보기"
                  style={{ width: "40px" }}
                  onClick={() => {
                    memberApprove({ url: approve.url, schoolSeq: approve.schoolSeq });
                  }}
                />
              </S.TR>
            ))}
      </S.TBody>
    </>
  );
};

export default ApproveTable;

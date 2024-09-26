"use client";
import * as S from "./style";
import { useGetPendingMemberList } from "@/queries/Approve/approve.query";
import { useApproveSelectClick } from "@/store/approve";
import { useMemberSearchStore } from "@/store/member";
import ActiveTable from "./activeTable";
import PendingTable from "./pendingTable";

const ApproveTable = () => {
  const { selectClick } = useApproveSelectClick();
  const { data } = useGetPendingMemberList(1, selectClick);
  
  return (
    <>
      <S.TBody style={{ width: "100%" }}>
        {selectClick === "ACTIVE" ? (
          <ActiveTable activeList={data?.data!} />
        ) : (
          <PendingTable pendingList={data?.data!} />
        )}
      </S.TBody>
    </>
  );
};

export default ApproveTable;

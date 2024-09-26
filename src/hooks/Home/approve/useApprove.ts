import { ApproveRepository } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { useState } from "react";
import Swal from "sweetalert2";
import { usePostApproveMember } from "@/queries/Approve/approve.query";

interface memberApproveProps {
  url: string;
  schoolSeq: string;
}

const useApprove = () => {
  const usePostApprove = usePostApproveMember();
  const [approve, setApprove] = useState(false);
  //   const ApproveData = {
  //     url: "https://school.gyo6.net/gbsw/schl/sv/schdulView/schdulCalendarView.do",
  //     week: "tr.week",
  //     days: "td.selectDay",
  //     scheduleTag: "p",
  //     scheduleDate: "id",
  //     scheduleAttr: "data-schdultitle",
  //     schoolSeq: "13131",
  //   };
  const memberApprove = ({ url, schoolSeq }: memberApproveProps) => {
    Swal.fire({
      title: "이 학교를 승인 할까요?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "승인",
      cancelButtonText: "취소",
    }).then((result) => {
      const ApproveData = {
        url: url,
        week: "tr.week",
        days: "td.selectDay",
        scheduleTag: "p",
        scheduleDate: "id",
        scheduleAttr: "data-schduletitle",
        schoolSeq: schoolSeq,
      };
      if (result.isConfirmed) {
        usePostApprove.mutate(ApproveData, {
          onSuccess: () => {
            Swal.fire("승인되었습니다", "", "success");
          },
        });
      }
    });
  };

  return {
    memberApprove,
    approve,
  };
};

export default useApprove;

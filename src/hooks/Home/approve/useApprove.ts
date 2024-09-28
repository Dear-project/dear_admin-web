import { ApproveRepository } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { useCallback, useState } from "react";
import Swal from "sweetalert2";
import { usePostApproveMember } from "@/queries/Approve/approve.query";
import { useSchoolAdditionalData } from "@/store/approve";

const useApprove = () => {
  const usePostApprove = usePostApproveMember();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { additionalData, setAdditionalData } = useSchoolAdditionalData();

  const handleAdditionalData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setAdditionalData((prev) => ({ ...prev, [name]: value }));
    },
    [setAdditionalData],
  );

  const memberApprove = (schoolSeq: string) => {
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
        url: additionalData.url,
        week: additionalData.weektag,
        days: additionalData.daytag,
        scheduleTag: additionalData.scheduletag,
        scheduleDate: "id",
        scheduleAttr: additionalData.scheduleAttr,
        schoolSeq: schoolSeq,
      };
      setIsOpen((prev) => !prev);
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
    isOpen,
    setIsOpen,
    handleAdditionalData,
  };
};

export default useApprove;

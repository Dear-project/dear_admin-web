import { ApproveRepository } from "@/repositories/ApproveRepostiory/ApproveRepository";
import { useState } from "react";
import Swal from "sweetalert2";

const useApprove = () => {
    const [approve, setApprove] = useState(false);

    const memberApprove = () => {
        Swal.fire({
            title: "이 학교를 승인 할까요?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "승인",
            cancelButtonText: "취소",
        }).then((result) => {
            if (result.isConfirmed) {
                setApprove(true);
                Swal.fire("승인되었습니다", "", "success");
            }
        });
    };

    return {
        memberApprove,
        approve
    };
};

export default useApprove;

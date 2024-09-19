import Swal from "sweetalert2";
import { useMemebrQuit } from "@/queries/Member/Member.query";
import { MemberType } from "@/types/member/member.type";
import { Delcaration } from "@/types/declaration/declaration.type";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";
import { showToast } from "@/libs/Toast/swal";

const UseDeclaration = () => {
  const queryClient = useQueryClient();
  const MemebrQuit = useMemebrQuit();
  const MemberReject = (item: Delcaration) => {
    Swal.fire({
      title: "신고 대상을 정지 하겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "정지",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        showToast("success", "정지되었습니다");
        MemebrQuit.mutate(
          {
            id: item.targetId,
            comment: item.reason,
          },
          {
            onSuccess: () => {
              queryClient.invalidateQueries({
                queryKey: [DearQueryKey.member.getMember],
              });
            },
          },
        );
      }
    });
  };
  return {
    MemberReject,
  };
};
export default UseDeclaration;

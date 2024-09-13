import { ScheuduleStatus } from "@/repositories/ApproveRepostiory/ApproveRepository";

export const statusTransform = (status: ScheuduleStatus) => {
  switch (status) {
    case "PENDING":
      return "비활성화";
    case "ACTIVE":
      return "활성화";
  }
};

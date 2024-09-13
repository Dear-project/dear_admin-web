export interface ApproveRepository {
  getPendingMember(page: number, status: ScheuduleStatus): Promise<getPendingMemberResponse>;
}

interface getPendingMemberType {
  schoolName: string;
  schoolSeq: string;
  studentNum: number;
  scheudleStatus: ScheuduleStatus;
}

export interface getPendingMemberResponse extends Response {
  data: getPendingMemberType[];
}

export type ScheuduleStatus = "PENDING" | "ACTIVE";

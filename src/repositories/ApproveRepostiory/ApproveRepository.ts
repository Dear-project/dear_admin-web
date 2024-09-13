export interface ApproveRepository {
  getPendingMember(page: number, status: ScheuduleStatus): Promise<getPendingMemberResponse>;
}

export interface getPendingMemberType {
  schoolName: string;
  schoolSeq: string;
  studentNum: number;
  scheduleStatus: ScheuduleStatus;
}

export interface getPendingMemberResponse extends Response {
  data: getPendingMemberType[];
}

export type ScheuduleStatus = "PENDING" | "ACTIVE";

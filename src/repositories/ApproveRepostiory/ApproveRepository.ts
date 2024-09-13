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

export interface postApproveProps{
    url : string,
    week: string,
    days : string,
    scheduleTag : string,
    scheduleDate : string,
    scheduleAttr : string,
    schoolSeq : string
}
export interface postApproveMember extends Response{
}
import { Response } from "../util/Auth/response.type";

export interface MemberType {
  UserId: number;
  name: string;
  birthDay: string;
  type: string;
  userStatus: string;
  role: string;
  lClass: string;
  mClass: string;
  schoolName: string;
  seq: string;
}

export interface MemeberResponse extends Response {
  data: MemberType[] ;
}

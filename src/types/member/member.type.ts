import { Response } from "../util/Auth/response.type";

export interface MemberType {
  UserId: number;
  email: string
  name: string;
  birthDay: string;
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


export interface RejectPrpos{
  Id:number;
  commnet:string;
}

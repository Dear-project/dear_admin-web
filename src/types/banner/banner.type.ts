import { Response } from "../util/Auth/response.type";

export interface Banner {
  expiredAt: string;
  readonly id: number;
  imagePath: string | null;
  redirectUrl: string;
  title: string;
}

export interface BannersResponse extends Response {
  data: Banner[] ;
}
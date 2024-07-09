import { Response } from "@/types/util/Auth/response.type";

export interface Delcaration {
  id: number;
  targetId: number;
  reason: string;
  category: string;
  reportId: number;
  dateTime: string;
  reportName: string;
  targetName: string
}

export interface DelcarationResponse extends Response {
  data: Delcaration[];
}

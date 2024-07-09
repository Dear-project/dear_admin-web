import dayjs from "dayjs";

class DateTransform {
  public hyphen(date?: string): string {
    return dayjs(date).format("YYYY-MM-DD");
  }
  public DateTime(data?:string):string{
    return dayjs(data).format("YYYY-MM-DD HH:mm:ss")
  }
}

export default new DateTransform();
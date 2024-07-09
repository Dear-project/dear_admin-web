import  dearAxios  from "@/libs/axios/CustomAxios";
import { ProfileRepository } from "./ProfileRepository";
import {  ProfileType } from "@/types/profile/profileModel.types";

class ProfileRepositoryImpl implements ProfileRepository {
  public async getProfileInfo(): Promise<ProfileType> {
    const { data } = await dearAxios.get("/profile");
    return data;
  }
}

export default new ProfileRepositoryImpl();
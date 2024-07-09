import dearAxios from "@/libs/axios/CustomAxios";
import { DeclarationRepository } from "./DeclarationRepository";
import {DelcarationResponse} from "@/types/declaration/declaration.type";
class DeclarationRepositoryImpl implements DeclarationRepository{
    public async getDeclaration(): Promise<DelcarationResponse>{
        const {data} = await dearAxios.get("/declaration")
        return data
    }
}
export default new DeclarationRepositoryImpl();
import dearV1Axios from "@/libs/axios/CustomAxios";
import { DeclarationRepository } from "./DeclarationRepository";
import {DelcarationResponse} from "@/types/declaration/declaration.type";
class DeclarationRepositoryImpl implements DeclarationRepository{
    public async getDeclaration(): Promise<DelcarationResponse>{
        const {data} = await dearV1Axios.get("/declaration")
        return data
    }
}
export default new DeclarationRepositoryImpl();
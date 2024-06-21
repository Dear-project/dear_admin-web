import {DelcarationResponse} from "@/types/declaration/declaration.type"
export interface DeclarationRepository {
    getDeclaration(): Promise<DelcarationResponse>
}
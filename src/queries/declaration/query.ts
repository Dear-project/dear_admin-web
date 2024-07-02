import {
    useQuery
  } from "@tanstack/react-query";
import { DelcarationResponse } from "@/types/declaration/declaration.type";
import { AxiosError } from "axios";
import { DearQueryKey } from "../queryKeys";
import DeclarationRepositoryImpl from "@/repositories/DeclarationRepository/DeclarationRepositoryImpl";

export const useGetDeclarationQuery = ()=>{
    const useGetDeclaration = useQuery<DelcarationResponse, AxiosError, DelcarationResponse, string[]>({
        queryKey: [DearQueryKey.declaration.getDeclaration],
        queryFn: ()=>DeclarationRepositoryImpl.getDeclaration(),
        gcTime: 1000 * 60 * 60,
        staleTime: 1000 * 60 * 60,
    })
    return useGetDeclaration
}
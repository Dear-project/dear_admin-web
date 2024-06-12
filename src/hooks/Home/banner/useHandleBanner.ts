import { useDeleteBannerMutation } from "@/queries/banner/bannerUpload.query"
import { showToast } from "@/libs/Toast/swal";
import { useQueryClient } from "@tanstack/react-query";
import { DearQueryKey } from "@/queries/queryKeys";

const UseHandleBanner =()=>{
    const deleteBannerMustaion =useDeleteBannerMutation();
    const queryClient = useQueryClient();

    const deleteBanner =(id:number)=>{
        
        deleteBannerMustaion.mutate(
            {id:id},
            {onSuccess:()=>{
                showToast("success","삭제 성공")
                queryClient.invalidateQueries({queryKey:[DearQueryKey.banner.get]})
                
            },onError:()=>{
                showToast("error","삭제 실패");
            }}
        )
    }

    return{
        deleteBanner
    }
}
export default UseHandleBanner
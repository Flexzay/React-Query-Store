import { useQueryClient } from "@tanstack/react-query"


export const usePrefechProduct = () => {

    const queryClient = useQueryClient()

    const preFetchProduct = async (id: number) =>{
        queryClient.prefetchQuery(

            ["product", id]
            () =>

        );
    }





  return 
}

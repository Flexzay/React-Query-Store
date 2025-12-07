import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/actions";

export const useProductMutation = () => {

const queryClient = useQueryClient()

  const productMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log("Producto creado ");


        queryClient.invalidateQueries(
            ['products', data.category]
        )

    },
    onSettled: () => {
      console.log("on settle ");
    },
  });
  
  return productMutation;
};

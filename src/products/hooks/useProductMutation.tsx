import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../services/actions";
import { Product } from "../interface/Product";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const productMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log("Producto creado ");

      // queryClient.invalidateQueries(
      //     ['products', data.category]
      // )

      queryClient.setQueryData<Product[] | undefined>(
        ["products", data.category],
        (old) => {
          if (!old) return [data];
          return [...old, data];
        }
      );
    },
    onSettled: () => {
      console.log("on settle ");
    },
  });

  return productMutation;
};

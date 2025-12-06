import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../services/actions";

interface Options {
  id: number;
}

export const useProduct = ({ id }: Options) => {
  const productIdQuery = useQuery({
    queryKey: ["productId", id],
    queryFn: () => getProduct(id),
    staleTime: 1000 * 60 * 60,
  });

  return {
    productIdQuery,
  };
};

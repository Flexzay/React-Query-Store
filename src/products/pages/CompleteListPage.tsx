import { ProductList } from "..";
import { useProducts } from "../hooks/useProducts";

export const CompleteListPage = () => {
  const { productQuery } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      {productQuery.isLoading && <span>Cargando productos...</span>}

      {productQuery.data && <ProductList products={productQuery.data} />}
    </div>
  );
};

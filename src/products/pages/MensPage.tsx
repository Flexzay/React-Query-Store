import { ProductList } from "..";
import { useProducts } from "../hooks/useProducts";

export const MensPage = () => {
  const { productQuery } = useProducts({
    filterKey: "men's clothing",
  });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      {productQuery.isLoading && <span>Cargando productos...</span>}

      {productQuery.data && <ProductList products={productQuery.data} />}
    </div>
  );
};

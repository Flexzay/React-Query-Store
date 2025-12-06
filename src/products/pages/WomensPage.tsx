import { ProductList } from ".."
import { useProducts } from "../hooks/useProducts";

export const WomensPage = () => {

  const { productQuery } = useProducts({
      filterKey: "women's clothing",
    });
  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>
      {productQuery.isLoading && <span>Cargando productos...</span>}

      {productQuery.data && <ProductList products={productQuery.data} />}

    </div>
  )
}
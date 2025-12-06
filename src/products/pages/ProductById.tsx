import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProductsById";
import { ProductList } from "../components/ProductList";
import { useEffect } from "react";

export const ProductByid = () => {
  const { id } = useParams();
  const parsedId = id ? Number(id) : NaN;
  const { productIdQuery } = useProduct({ id: parsedId });


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  

  if (productIdQuery.isLoading) return <span>Cargando producto...</span>;

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>
      {productIdQuery.data ? (
        <ProductList products={[productIdQuery.data]} fullDescription={true} />
      ) : (
        <span>No se encontró el producto.</span>
      )}
    </div>
  );
};

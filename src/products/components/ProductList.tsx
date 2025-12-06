import { ProductCard } from ".."
import { Product } from "../interface/Product"

interface Props {
  products: Product[]
  fullDescription?: boolean
}

export const ProductList = ({products,fullDescription}:Props) => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 justify-center max-w-max">

      {products.map(product => (
        <ProductCard key={product.id} product={product} fullDescription={fullDescription} />
      ))}

    </div>
  )
}
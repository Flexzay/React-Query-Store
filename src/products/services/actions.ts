import { productsApi } from "../api/productsApi";
import { Product } from "../interface/Product";

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({ filterKey }: GetProductsOptions):Promise<Product[]> => {
  const filterUrl = filterKey ? `category=${filterKey}` : "";
  const { data } = await productsApi.get<Product[]>(`/products?${filterUrl}`);

  return data;
};

export const getProduct = async (id: number): Promise<Product> => {
  const { data } = await productsApi.get<Product>(`/products/${id}`);

  return data;
};


export interface ProductLike {
    id?:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
}




export const createProduct  = async(product: ProductLike) =>{
  const resp = productsApi.post<Product>(`/products`, product)
  return resp
}
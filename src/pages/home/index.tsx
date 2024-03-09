import { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { api } from "../../services/api";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div>
      <main className="w-full max-w-7x1 px-4 mx-auto">
        <h1 className="font-bold text-2x1 mb-4 mt-10  text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <img
                className="ww-full rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.description}
              />
              <p className="font-medium  mt-1  mb-2">{product.title}</p>
              <div className="flex gap-3 items-center ">
                <strong className="text-zinc-700/90  ">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button className="bg-zinc-900 p-1 rounded  ">
                  <BsCartPlus size={20} color="#fff" />
                </button>
              </div>
            </section>
          ))}

          {/* <section className="w-full">
            <img
              className="ww-full rounded-lg max-h-70 mb-2"
              src="public/img/composicao-realista-sem-fio-de-fone.jpg"
              alt="logo do produto"
            />
            <p className="font-medium  mt-1  mb-2">Airpods Pro</p>
            <div className="flex gap-3 items-center ">
              <strong className="text-zinc-700/90  ">R$1000</strong>
              <button className="bg-zinc-900 p-1 rounded  ">
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section> */}
        </div>
      </main>
    </div>
  );
}

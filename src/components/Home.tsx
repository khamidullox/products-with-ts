import { Product, Products } from "./interfase";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
export let loader = async () => {
  let req = await customFetch("");
  let products = req.data;
  return { products };
};
function Home() {
  let { products } = useLoaderData() as { products: Products };

  return (
    <div className="  grid gap-10 grid-cols-3 items-center justify-center pl-20 ">
      {products &&
        products.products.map((product: Product) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl" key={product.id}>
              <figure>
                <img
                  className=" "
                  src={product.thumbnail}
                  alt={product.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className=" line-clamp-3">{product.description}</p>
                <div className=" w-full flex gap-5 justify-between items-center  ">
                  <p className="badge badge-outline w-20 ">
                    {formatPrice(product.price)}
                  </p>
                  <p className=" badge badge-outline text-end  w-20">
                    {product.rating}
                  </p>
                </div>
                <div className="card-actions w-full py-2">
                  <Link
                    to={`/singleProdcut/${product.id}`}
                    className="btn btn-info w-full"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Home;

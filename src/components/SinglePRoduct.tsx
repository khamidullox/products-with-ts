import { Product } from "./interfase";
import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { addAmount } from "../app/amoutSlice";
export let loader = async ({ params }: any) => {
  let req = await customFetch(`/${params.id}`);
  let product = req.data;
  return { product };
};

function SinglePRoduct() {
  let [amout, setAmout] = useState(1);
  let { product } = useLoaderData() as { product: Product };
  let { id, price, title, description, images, rating, category } = product;
  const count: number = useSelector((state: RootState) => state.counter.amout);
  const dispatch = useDispatch();
  console.log(count);

  return (
    <div className=" px-20 flex gap-10 mt-20 items-center justify-center">
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box text-center">
        {images.map((img: string) => {
          return (
            <div key={id} className="carousel-item w-full size-96  ">
              <img
                className=" object-contain bg-white rounded-xl mr-5 w-96  "
                src={img}
                alt={title}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-5 justify-start">
        <h1 className=" text-4xl font-bold">{title}</h1>
        <h5 className="text-2xl opacity-50 font-bold  capitalize">
          {category}
        </h5>
        <p className="text-xl ">{description}</p>

        <div className=" w-full flex gap-5 justify-between items-start font-medium  flex-col">
          <p className=" text-2xl  ">Price: {formatPrice(price)}</p>
          <p className=" text-2xl "> Rating: {rating}</p>
        </div>
        <div className=" flex items-center gap-10 mt-10">
          <div className="flex gap-5 items-center  borde   ">
            <button
              onClick={() => {
                setAmout(amout - 1);
              }}
              disabled={amout == 1 ? true : false}
              className="btn"
            >
              -
            </button>
            <p className="font-bold text-xl">{amout}</p>
            <button
              onClick={() => {
                setAmout(amout + 1);
              }}
              className="btn"
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                dispatch(addAmount({ ...product, total: amout }));
                setAmout(0);
              }}
              className=" btn btn-success  text-white"
            >
              Add Amout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePRoduct;

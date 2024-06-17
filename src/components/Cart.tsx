import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Product } from "./interfase";
import { formatPrice } from "../utils";

function Cart() {
  const { product } = useSelector((state: RootState) => state.counter);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            {/* <th>Category</th> */}
            <th>Price</th>
            <th>Amout</th>
            <th>Tatal</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {product.map((product: Product) => {
            let {
              id,
              price,
              title,

              total,
              category,
              thumbnail,
            } = product;

            return (
              <tr key={id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={thumbnail} alt={title} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{title}</div>
                      <div className="text-sm opacity-50">{category}</div>
                    </div>
                  </div>
                </td>

                <td className="font-bold">{formatPrice(price)}</td>
                <th>
                  <button className="  w-ful font-bold">{total}x</button>
                </th>
                <td className=" font-bold ">{formatPrice(price * total)}</td>
              </tr>
            );
          })}
        </tbody>
        {/* foot */}
     
      </table>
    </div>
  );
}

export default Cart;

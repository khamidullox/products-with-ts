import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
function Novbar() {
  const count: number = useSelector((state: RootState) => state.counter.amout);

  return (
    <div className="navbar bg-base-100 mb-10 shadow-lg px-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl uppercase">
          {" "}
          dummy
        </Link>
      </div>
      <div className="flex-none">
        <div className="indicator">
          <span className="indicator-item badge -top-1 badge-info text-white   ">
            {count}
          </span>
          <Link to="/cart" className="">
            <AiOutlineShoppingCart className=" size-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Novbar;

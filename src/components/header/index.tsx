import { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export function Header() {
  return (
    <header className="w-full px-1 bg-slate-200">
      <nav className="w-full  max-w-7x1 h-14 flex items-center justify-between px-6 mx-auto">
        <Link className="font-bold text-2x1" to="/">
          Davi_dev Shop
        </Link>

        <Link className="relative" to="/cart">
          <FiShoppingCart size={24} color="#121212" />
          <span
            className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center
          justify-center text-white text-xs "
          >
            2
          </span>

          {/* {cartAmount > 0 && (
            <span
              className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center
        justify-center text-white text-xs "
            >
              {cartAmount}
            </span>
          )} */}
        </Link>
      </nav>
    </header>
  );
}

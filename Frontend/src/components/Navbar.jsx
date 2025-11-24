import { FaSearch, FaUser } from "react-icons/fa";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between h-[100px] shadow-md px-8 bg-white">
        {/* Logo */}
        <div className="cursor-pointer">
          <img
            src="/blisslogo1.png"
            alt="Beauty Bliss Logo"
            className="h-[70px] w-auto"
          />
        </div>

        {/* Search */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-[500px]">
            <input
              type="text"
              placeholder="search"
              className="w-full p-[12px] pl-4 pr-10 border-2 border-pink-300 rounded-lg outline-none"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
          </div>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center">
          <div className="mr-[20px] cursor-pointer">
            <Badge badgeContent={2} color="secondary">
            <ShoppingBasketIcon className="text-pink-500" />
          </Badge>
          </div>

        </div>

        {/* Login */}
        <button className="flex items-center gap-2 border border-pink-300 px-4 py-2 rounded-lg text-pink-500 cursor-pointer hover:bg-pink-100 duration-300">
          <FaUser />
          <span>Login</span>
        </button>
      </div>
    </>
  );
};

export default Navbar;

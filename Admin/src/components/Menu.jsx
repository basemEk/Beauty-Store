import {
  FaBox,
  FaChartBar,
  FaClipboard,
  FaClipboardList,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";

function Menu() {
  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white text:p-[20px]">
          <FaHome className="mr-[15px] text-[#ef93db]" />
          Home
        </li>  

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaUser className="mr-[15px] text-[#ef93db]" />
          Profile
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaUsers className="mr-[15px] text-[#ef93db]" />
          Users
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaBox className="mr-[15px] text-[#ef93db]" />
          Products
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaClipboardList className="mr-[15px] text-[#ef93db]" />
          Orders
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaElementor className="mr-[15px] text-[#ef93db]" />
          Banners
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaCog className="mr-[15px] text-[#ef93db]" />
          Settings
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaHdd className="mr-[15px] text-[#ef93db]" />
          Backups
        </li>

        <hr className="w-full my-[20px] border-gray-300" />hover:bg-pink-300 hover:text-white
        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaChartBar className="mr-[15px] text-[#ef93db]" />
          Charts
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaClipboard className="mr-[15px] text-[#ef93db]" />
          All Logs
        </li>

        <li className="flex items-center text-[20px] cursor-pointer mt-[20px] transition-colors duration-100 hover:bg-pink-300 hover:text-white">
          <FaSignOutAlt className="mr-[15px] text-[#ef93db]" />
          Logout
        </li>
      </ul>
    </div>
  );
}

export default Menu;

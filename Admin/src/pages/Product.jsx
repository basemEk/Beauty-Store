import { LineChart } from "@mui/x-charts/LineChart";
import { FaUpload } from "react-icons/fa";

const Product = () => {
  return (
    <div className="p-5 w-[70vw]">
      {/* HEADER PART */}
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-3xl font-semibold">Products</h3>
        <button className="bg-slate-500 text-white py-2 px-4 rounded cursor-pointer">
          Create
        </button>
      </div>

      {/* TOP SECTION: CHART AND CARD */}
      <div className="flex flex-col md:flex-row gap-5 mb-5">
        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
            height={250}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ horizontal: true }}
          />
        </div>

        {/* PRODUCT INFO CARD */}
        <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
          <div className="flex items-center mb-5">
            <img
              src="https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="h-20 w-20 rounded-full mr-5"
              alt="Cleanser"
            />
            <span className="text-xl font-semibold text-gray-700">
              Hydrating Facial Cleanser
            </span>
          </div>
          <div className="space-y-3 text-gray-600">
            <div className="flex justify-between">
              <span className="font-semibold">ID:</span>
              <span>62528291</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Sales:</span>
              <span>625</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">In stock:</span>
              <span>Yes</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION: FORM AND UPLOAD (Nesting fixed here) */}
      <div className="flex-1 bg-white p-5 shadow-lg rounded-lg">
        {/* THIS MAIN FLEX CONTAINER IS THE FIX */}
        <div className="flex gap-10">
          
          {/* FORM LEFT (Flex part 1) */}
          <form action="" className="flex-1 space-y-5">
            <div className="flex flex-col">
              <label htmlFor="name" className="block mb-2 font-semibold">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="desc" className="block mb-2 font-semibold">
                Product Description
              </label>
              <input
                type="text"
                id="desc"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="origPrice" className="block mb-2 font-semibold">
                Product Original Price
              </label>
              <input
                type="number"
                id="origPrice"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="discPrice" className="block mb-2 font-semibold">
                Product Discounted Price
              </label>
              <input
                type="number"
                id="discPrice"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            {/* The select box classing has been retained */}
            <div className="flex flex-col">
              <label htmlFor="stock" className="block mb-2 font-semibold">
                In Stock
              </label>
              <select
                id="stock"
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </form>

          {/* UPLOAD RIGHT (Flex part 2) */}
          <div className="flex-1 flex flex-col items-center justify-between py-6">
            <div className="flex flex-col items-center">
              {/* IMAGE FIX: Used rounded-full for fully rounded look */}
              <img
                src="https://images.pexels.com/photos/8101532/pexels-photo-8101532.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="h-40 w-40 rounded-full shadow-md object-cover mb-4 mr-5"
                alt="Upload preview"
              />
              <label htmlFor="file" className="cursor-pointer mt-5">
                <FaUpload className="text-2xl text-gray-700 hover:opacity-80" />
                <input type="file" id="file" className="hidden" />
              </label>

              <button className="bg-slate-500 text-white py-2 px-4 mt-5 rounded">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
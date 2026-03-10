import { FaPlus } from "react-icons/fa";

const Banners = () => {
  return (
    <div className="flex mt-[50px]">
      <div className="flex flex-col p-8">
        {/* Container to match the layout */}
        <div className="flex flex-col max-w-[500px]">
          {/* Headline */}
          <h2 className="text-lg font-bold mb-4 text-gray-800">
            Active Banners
          </h2>

          {/* Banner Card */}
          <div className="flex items-start space-x-4 border-b border-gray-100 pb-6">
            {/* Banner Image - matches the square rounded look */}
            <img
              src="https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg"
              alt="Banner"
              className="w-24 h-24 object-cover rounded-lg shadow-sm"
            />

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[17px] font-bold text-gray-800 leading-tight mb-1">
                Radiate Beauty, Inside and Out.
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-snug max-w-[200px]">
                Discover Your Perfect Products for a Flowless Look.
              </p>
            </div>

            {/* Delete Button - matches the red box style */}
            <button className="bg-[#ef4444] hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded transition-colors cursor-pointer mt-4">
              Delete
            </button>
          </div>
        </div>

        <div className="flex flex-col max-w-[500px]">
          {/* Banner Card */}
          <div className="flex items-start space-x-4 border-b border-gray-100 pb-6">
            {/* Banner Image - matches the square rounded look */}
            <img
              src="https://images.pexels.com/photos/4465121/pexels-photo-4465121.jpeg"
              alt="Banner"
              className="w-24 h-24 object-cover rounded-lg shadow-sm"
            />

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-[17px] font-bold text-gray-800 leading-tight mb-1">
                Radiate Beauty, Inside and Out.
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-snug max-w-[200px]">
                Discover Your Perfect Products for a Flowless Look.
              </p>
            </div>

            {/* Delete Button - matches the red box style */}
            <button className="bg-[#ef4444] hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded transition-colors cursor-pointer mt-4">
              Delete
            </button>
          </div>
        </div>
      </div>
      
      {/* RIGHT */}
      <div className="flex flex-col">
        <div className="ml-[20px] pt-[30px]">
          <span htmlFor="">Image:</span>
        </div>
        <div className="flex-1 bg-white p-5">
          <div className="flex flex-col">
            <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md">
              <div className="flex items-center justify-center mt-[40px]">
                <label htmlFor="" className="cursor-pointer">
                  <FaPlus className="text-[20px]" />
                </label>
              </div>
            </div>
          </div>
            <div className="flex flex-col my-3">
              <span className="font-semibold">Title:</span>
              <input type="text" className="w-[250px] outline-none border-b-2 border-[#444] border-solid" />
            </div>

            <div className="flex flex-col my-3">
              <span className="font-semibold">Subtitle:</span>
              <input type="text" className="w-[250px] outline-none border-b-2 border-[#444] border-solid" />
            </div>

            <button className="bg-[#1e1e1e] text-white text-sm px-25 py-2 rounded transition-colors cursor-pointer mt-4">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default Banners;

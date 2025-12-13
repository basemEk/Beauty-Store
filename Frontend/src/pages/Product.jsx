import { FaMinus, FaPlus } from "react-icons/fa";
import { Rating } from "react-simple-star-rating";

const Product = () => {
  return (
    <div className="h-auto flex justify-stretch p-[30px]">
      {/* LEFT SECTION */}
      <div className="flex-1 h-[500px] w-[600px]">
        <img
          src="/lotion2.jpg"
          alt=""
          className="h-[100%] w-[100%] object-cover"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-1 flex-col ml-10">
        <h2 className="text-[25px] font-semibold mb-[20px]">
          Bajaj Almond Drops,6X Vitamin E Nourishment
        </h2>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <h2 className="font-semibold mt-2 text-[20px]">$ 90</h2>
        <span className="flex items-center">
          <Rating
            initialValue={2.5}
            allowFraction
            size={25}
            fillColor="yellow"
            emptyColor="grey"
            SVGstyle={{ display: "inline-block" }}
          />
          (2)
        </span>

        <div className="h-52 w-96 border-2 border-gray-300 rounded-lg shadow-md my-4 p-6 bg-white">
          <h2 className="flex items-center justify-center font-semibold text-lg text-gray-700 mb-4">
            WHAT'S IN THE BOX
          </h2>
          <hr className="mb-4 text-gray-300" />
          <span className="block text-gray-600 text-base text-[18px]">
            1 Garnier Even & Matte Vitamin C Cleaning Foam 500ml
          </span>
        </div>

        <div className="inline-flex items-center bg-[#ef93db] text-white text-sm font-semibold p-3 rounded-full shadow-md">
          Wholesale Available : $70 as from 10 items
        </div>

        <div className="flex items-center my-5 p-4">
          <div className="bg-[#ef93db] rounded-full flex items-center justify-center w-8 h-8 cursor-pointer">
            <FaMinus size={12} className="text-white" />
          </div>

          <span className="text-lg font-semibold mx-4">1</span>

          <div className="bg-[#ef93db] rounded-full flex items-center justify-center w-8 h-8 cursor-pointer">
            <FaPlus size={12} className="text-white" />
          </div>
        </div>

        <button className="bg-[#1e1e1e] p-[10px] w-[200px] text-white cursor-pointer">Add to Cart</button>

        <hr className="my-6"/>

        <div className="flex flex-col">
          <h2 className="font-semibold text-[18px]">Reviews</h2>

          <div className="flex items-center">
            <Rating
            initialValue={2.5}
            allowFraction
            size={25}
            fillColor="yellow"
            emptyColor="grey"
            SVGstyle={{ display: "inline-block" }}
          />
          <span className="font-semibold mx-[20px]">Bassem K.</span>
          </div>
          <div className="flex items-center">
            <Rating
            initialValue={3}
            allowFraction
            size={25}
            fillColor="yellow"
            emptyColor="grey"
            SVGstyle={{ display: "inline-block" }}
          />
          <span className="font-semibold mx-[20px]">Jane B.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

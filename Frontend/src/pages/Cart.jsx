import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

function Cart() {
  return (
    <div className="min-h-screen p-8">
      <h3 className="text-[18px] font-bold mb-6">Shopping Cart</h3>

      <div className="flex gap-8">
        {/* LEFT SIDE */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Items</h3>

          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-grey-200 pb-4">
              <img
                src="/lotion1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Mekis Grapeseed & Sweet Almond Oil-30Ml, For Dull
                </h3>
                <p className="text-gray-600 mb-2">
                  What's Good about Mekis Sweet Almind Oil with Grape seen combo
                  for your skin and hair? Sweet Almond
                </p>

                <div className="flex items-center my-5 p-4">
                  <div className="bg-[#ef93db] rounded-full flex items-center justify-center w-8 h-8 cursor-pointer">
                    <FaMinus size={12} className="text-white" />
                  </div>
                  <span className="text-lg font-semibold mx-4">1</span>
                  <div className="bg-[#ef93db] rounded-full flex items-center justify-center w-8 h-8 cursor-pointer">
                    <FaPlus size={12} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold mb-6">$90</p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-grey-200 pb-4">
              <img
                src="/lotion1.jpg"
                alt=""
                className="w-32 h-32 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-xl font-semibold mb-2">
                  Mekis Grapeseed & Sweet Almond Oil-30Ml, For Dull
                </h3>
                <p className="text-gray-600 mb-2">
                  What's Good about Mekis Sweet Almind Oil with Grape seen combo
                  for your skin and hair? Sweet Almond
                </p>

                <div className="flex items-center my-5 p-4">
                  <div className="bg-[#ef93db] rounded-full flex items-center justify-center w-8 h-8 cursor-pointer">
                    <FaMinus size={12} className="text-white" />
                  </div>
                  <span className="text-lg font-semibold mx-4">1</span>
                  <div className="bg-[#ef93db] rounded-full flex items-center justify-center w-8 h-8 cursor-pointer">
                    <FaPlus size={12} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold mb-6">$90</p>
                <FaTrashAlt className="text-red-600 cursor-pointer" />
              </div>
            </div>

            <button className="bg-red-400 w-[200px] text-white p-3 mt-4 rounded-md font-semibold">
              Clear Cart
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-80 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-lg font-medium">$ 490</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Shipping</span>
              <span className="text-lg font-medium">$ 10</span>
            </div>
            <div className="flex justify-between">
              <span className="text-lg font-medium">Total</span>
              <span className="text-lg font-medium">$ 500</span>
            </div>

            <button className="bg-[#ef93] text-white p-3 w-full rounded-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

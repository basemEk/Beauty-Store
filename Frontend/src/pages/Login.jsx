import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center mt-[5%]">
      <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
        {/* IMAGE */}
        <div className="h-[500px] w-[500px] transition-transform duration-700 ease-in-out hover:scale-105">
          <img
            src="/lotion1.jpg"
            alt="login"
            className="object-cover h-full w-full"
          />
        </div>

        {/* FORM */}
        <div className="p-10 w-[500px]">
          <h2 className="text-xl font-bold text-grey-700 mb-5">Login</h2>
          <form className="spay-y-5">
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Email
              </label>
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full p-3 border border-gray-300 rounded-md
             placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="" className="block text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="*******"
                className="w-full p-3 border border-gray-300 rounded-md
             placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-[#d55fbb]"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full py-2 bg-[#b55fbb] text-white font-bold rounded-md transition-transform duration-500 hover:bg-blue-300 focus:outline-none focus:ring-red-500 hover:scale-105 cursor-pointer">
              Login
            </button>

            <div className="mt-4 text-sm text-gray-600">
                <span>Don't have an account?</span>
                <Link to="/create-account" className="text-red-500 hover:underline ml-1">Sign-up here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

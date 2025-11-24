const Category = () => {
  return (
    <div className="flex items-center gap-8 m-5">
      <div className="relative cursor-pointer bg-[url('/lotion.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] rounded-sm overflow-hidden">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">Lotion</h2>
        </div>

      </div>


      <div className="relative cursor-pointer bg-[url('/foundation.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] rounded-sm overflow-hidden">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">Foundation</h2>
        </div>
        
      </div>


      <div className="relative cursor-pointer bg-[url('/serum1.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] rounded-sm overflow-hidden">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">Toners</h2>
        </div>
        
      </div>


      <div className="relative cursor-pointer bg-[url('/serum.jpg')] bg-no-repeat bg-cover bg-center h-[500px] w-[400px] rounded-sm overflow-hidden">

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>

        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-semibold text-[30px] text-white">Serums</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Category;

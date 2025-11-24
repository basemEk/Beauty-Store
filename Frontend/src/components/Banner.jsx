const Banner = () => {
    return (
        <div className="relative bg-[url('/beautybanner.jpg')] bg-no-repeat bg-cover h-[80vh] px-[200px]">
            <div className="absolute inset-0 bg-black opacity-50">

            </div>

            <div className="relative flex flex-col text-white w-[50%] pt-[10%]">
                <span className="text-[30px] mt-3">Discover Your Radiance With Our Handpicked Beauty Essentials</span>
                <h1 className="text-3xl mt-3">Glow With Confidence</h1>
                <div className="flex items-center mt-[20px]">
                    <button className="bg-[#e48bcd] p-[10px] w-[200px] mr-9 text-white cursor-pointer">Shop Now</button>
                    <button className="bg-gray-500 p-[10px] w-[200px] mr-9 text-white cursor-pointer">CALL: (176) 678 890</button>
                </div>
            </div>
        </div>
    );
};

export default Banner
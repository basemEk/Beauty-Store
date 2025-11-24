import { Rating } from "react-simple-star-rating";

const Product = () => {
    return (
    <div className="flex flex-col items-center justify-center h-[500px] m-[10px] cursor-pointer">
        <img
          src="/serum1.png"
          alt=""
          className="h-[400px] w-[300px] bg-cover"
        />

        <h2 className="font-semibold text-[18px] w-[300px]">
          Rosehip Seed, Argan, Almond & Vitamin E Oil-Anti-aging
        </h2>

        <span className="font-semibold text-[18px] flex items-center justify-center">
          $100
        </span>

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
      </div>
    )
}

export default Product;
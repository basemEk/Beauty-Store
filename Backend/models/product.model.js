import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    whatInBox: {
        type: String,
        require: true
    },
    video: {
        type: String
    },
    wholeSalePrice: {
        type: Number,
    },
    wholeSaleMinimumQuantity: {
        type: Number
    },
    categories: {
        type: Array
    },
    concern: {
        type: Array
    },
    brand: {
        type: String
    },
    skinType: {
        type: Array
    },
    originalPrice: {
        type: Number
    },
    discountedPrice: {
        type: Number
    },
    inStock: {
        type: Boolean,
        default: true
    },
    ratings: [
        {
            star: {type: String},
            name: {type: String},
            comment: {type: String},
            postedBy: {type: String}
        }
    ]

});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    userId: {
        type: String,
        require: true
    },

    products: {
        type: Array,
        require: true
    },

    total: {
        type: Number,
        require: true
    },

    address: {
        type: String
    },

    phone: {
        type: String
    },

    email: {
        type: String
    },

    status: {
        type: Number,
        default: 0   // 0 means the order has newly been created => the email hasn't been sent to the user. will be updated to 1 => pending order, na dhasn't been delivered to the client
    }
}, {
    timestamps: true
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
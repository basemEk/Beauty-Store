import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    address: {
        type: String,
    },

    phone: {
        type: String
    },

    role: {
        type: String,
        default: "User"
    },

    status: {
        type: Number,
        default: 0
    }
    
},
{
    timestamps: true
}
);

userSchema.pre("save", async function(next) {      //A Mongoose middleware that runs before saving a user (pre("save")) | pre("save") → automatically hashes the password before saving.
    if(!this.isModified("password")) {             //this, means this user | If the password field hasn’t changed (e.g., updating email), skip hashing and continue.
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);  //Replace the plain password with its hashed version before saving to DB.
});

userSchema.methods.matchPassword = async function(enteredPassword) {   //Define a method on the schema to check if a login password matches the stored hash.
    return await bcrypt.compare(enteredPassword, this.password);       //Compare the entered plain password with the hashed one in DB, returns true or false
}

const User = mongoose.model("User", userSchema)
export default User;
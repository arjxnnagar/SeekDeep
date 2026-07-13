import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required,
    },
    name: {
      type: String,
      required,
    },
    email: {
      type: email,
      required,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = mongoose.models.User || model("User", userSchema);

export default User;

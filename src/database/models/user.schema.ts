import mongoose from "mongoose";
const Schema = mongoose.Schema;

enum Role {
  Student = "student",
  Admin = "admin",
}
interface IUser extends Document {
  username: string;
  profileImage: string;
  email: string;
  role: Role;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: [Role.Admin, Role.Student],
    default: Role.Student,
  },
  profileImage: {
    type: String,
  },
});

// If already exists -> reuse it      // If not -> create it
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;

import mongoose from "mongoose";
const MONGODB_CS = process.env.MONGODB_CS;

if (!MONGODB_CS) {
  throw new Error("MONGODB_CS environment variable is not found");
}

const dbconnect = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("database already connected");
    return;
  }
  try {
    await mongoose.connect(MONGODB_CS);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
export default dbconnect;

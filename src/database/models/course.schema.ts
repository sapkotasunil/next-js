import mongoose, { Schema } from "mongoose";

interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  category: mongoose.Types.ObjectId;
  lessons: mongoose.Types.ObjectId[];
  CreatedAt: Date;
  duration: string;
}
const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  lessons: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export default course;

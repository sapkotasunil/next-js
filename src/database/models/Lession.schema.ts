import mongoose, { Schema } from "mongoose";
import { ST } from "next/dist/shared/lib/utils";

interface ILesson extends Document {
  course: mongoose.Types.ObjectId;
  title: string;
  description: string;
  videoUrl: string;
  createdAt: Date;
}
const lessonSchema = new Schema<ILesson>({
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Lession =
  mongoose.models.Lession || mongoose.model("Lesson", lessonSchema);

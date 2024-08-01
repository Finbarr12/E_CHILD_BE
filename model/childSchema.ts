import { Schema, model, Document } from "mongoose";

interface child extends Document {
  name: string;
  age: string;
  email: string;
  password: string;
  Class: string;
}

const childSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
});

export default model<child>("child", childSchema);

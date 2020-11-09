import { Schema, model } from "mongoose";

const QualificationSchema = Schema({
  grade: {
    type: Number,
    requerid: true,
  },
  comentary: {
    type: String,
  },
});

const Qualification = model("Qualification", QualificationSchema);

export default Qualification;
import { Schema, model } from "mongoose";

const LegalDocSchema = new Schema({
  title: String,
  content: String,
});

export const LegalDoc = model("LegalDoc", LegalDocSchema);
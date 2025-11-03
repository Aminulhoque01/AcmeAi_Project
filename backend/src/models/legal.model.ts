import { Schema, model } from "mongoose";
import { ILegalDoc } from "./legal.interface";

const LegalDocSchema = new Schema<ILegalDoc>({
  title: { type: String, required: true },
  jurisdiction: { type: String, default: "General" },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
});

export const LegalModel = model<ILegalDoc>("LegalDoc", LegalDocSchema);

 
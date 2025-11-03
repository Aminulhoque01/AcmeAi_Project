import mongoose from "mongoose";
import dotenv from "dotenv";
import { LegalModel } from "./models/legal.model";
 

dotenv.config(); // Load environment variables from .env

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI not defined in .env");
  process.exit(1);
}

const seedDocs = [
  {
    title: "Contractual Liability - Lease Agreement",
    jurisdiction: "Bangladesh",
    date: new Date("2021-05-10"),
    content:
      "This Lease Agreement establishes terms and conditions between Lessor and Lessee. Termination requires 60 days' notice. Liability governed by clause 14.",
    tags: ["contract", "lease", "liability"]
  },
  {
    title: "Intellectual Property - Software Assignment",
    jurisdiction: "USA",
    date: new Date("2020-11-01"),
    content:
      "Assignment of inventions created by Contractor is assigned to Company. Remedies for breach include injunctive relief and damages.",
    tags: ["ip", "assignment"]
  },
  {
    title: "Employment - Termination and Severance",
    jurisdiction: "UK",
    date: new Date("2019-07-15"),
    content:
      "Termination clause: employer may terminate with cause. Severance pay equals 1 month per year of service up to 12 months. Employee must comply with non-compete clause.",
    tags: ["employment", "severance", "termination"]
  }
];

(async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

    const count = await LegalModel.countDocuments();
    if (count === 0) {
      await LegalModel.insertMany(seedDocs);
      console.log("✅ Seeded sample legal documents");
    } else {
      console.log("⚠️ Documents already exist, skipping seed");
    }

    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error("❌ Error seeding documents:", err);
    process.exit(1);
  }
})();

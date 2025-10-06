// Beispiel: models/Inquiry.js
import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
    {
        companyName: { type: String, trim: true },
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        email: { type: String, required: true, unique: true, trim: true }, // Optional: unique
        message: { type: String, required: true },
        verificationToken: { type: String, required: true, unique: true },
        verified: { type: Boolean, default: false },
        expiresAt: { type: Date, required: true, expires: "24h" }, // TTL Index
    },
    { timestamps: true }
);

// Wichtig: 'expires: 24h' erstellt einen TTL-Index in Mongo, der die Dokumente nach 24h löscht (Aufräum-Mechanismus).
export default mongoose.models.Inquiry || mongoose.model("Inquiry", InquirySchema);

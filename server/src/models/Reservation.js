
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  restaurantName: String,
  date: Date,
  seats: Number,
  notes: String
}, { timestamps: true });

export default mongoose.model('Reservation', reservationSchema);

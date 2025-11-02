
/*
  Monnify sample: initialize transaction (server-side).
  IMPORTANT: Replace with real Monnify integration and secure secret usage in production.
*/
import axios from "axios";

export const initMonnify = async (req, res) => {
  try {
    const { amount, customerName, customerEmail, paymentDescription } = req.body;
    // This is a placeholder response for sandbox flow.
    // You should call Monnify Initialize Transaction API here with your secret key.
    const redirectUrl = `https://sandbox.monnify.com/learn-more?amount=${amount}`;
    res.json({ success: true, redirectUrl });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import foodRoutes from "./routes/foodRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Static uploads (serve images)
app.use('/uploads/foods', express.static(path.join(process.cwd(), 'server/uploads/foods')));

// Routes
app.use('/api/foods', foodRoutes);
app.use('/api/foods', uploadRoutes);
app.use('/api/payment', paymentRoutes);

app.get('/', (req, res) => res.send('FoodHub API running'));
export default app;

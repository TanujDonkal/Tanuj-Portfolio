import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import portfolioRoutes from "./routes/portfolio";
import contactRoutes from "./routes/contact";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

// Middleware
app.use(limiter);
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10kb" }));

// Routes
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

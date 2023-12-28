import express from "express";
import cors from "cors";
import path from "path";
import connectDB from "./config/connectDB.js";
import subscriptionRoutes from "./routes/subscription.js";
import { config } from "dotenv";
config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
connectDB();

console.log(process.env.SECRET_KEY);

app.use("/api/v1/subscription", subscriptionRoutes);

// for deployment
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/task-overlay-server/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "task-overlay-server", "dist", "index.html")
  );
});

// middleware for error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; // internal server error
  //mongo duplicate error || custom Error or Internal server error
  const message =
    (err.code === 11000 && "User Already Exists") ||
    err.message ||
    "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

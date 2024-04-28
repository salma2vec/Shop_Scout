import express, { Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// Routes and Controllers V1
import usersRouter from "@/api/v1/users/users";
import productsRouter from "@/api/v1/products/products";
import marketsRouter from "./api/v1/markets/markets";
import searchsRouter from "./api/v1/searchs/searchs";

// MongoDB
import { connectToDatabase } from "./utils/databaseConnector";

// Utils
import { startupDb } from "./utils/boot";

// Crons
import { tokenJob } from "./crons/tokenBlacklist";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
	morgan(":method :url :status :res[content-length] - :response-time ms")
);

const corsOptions = {
	origin: "*",
	methods: ["GET", "POST"],
};
app.use(cors(corsOptions));

let dbURI = '';
let dbName = '';

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI ?? '';
	dbName = process.env.MONGODB_DBNAME ?? '';
} else {
  dbURI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/';
	dbName = process.env.MONGODB_DBNAME ?? 'test';
}

connectToDatabase(dbURI, dbName);
startupDb();

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, World! MongoDB connected successfully!");
});

// Start crons
tokenJob.start();

// API Routes
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/markets", marketsRouter);
app.use("/api/v1/searchs", searchsRouter);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

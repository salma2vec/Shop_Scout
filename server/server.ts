import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// MongoDB
import { connectToDatabase } from "./utils/databaseConnector";

//Models
import { Product, findProducts } from "./models/searchSchema";
import { Product as ProductInterface } from "./interfaces/Product";

// Scrapers
import {
	findProductsOnAmazon,
	findProductsOnFlipkart,
	findProductsOnAlibaba,
	findProductsOnSnapdeal,
} from "./scrapers/index";

interface FilterObject {
	fieldToFilter: string;
}

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 9000;

console.log("START UP")
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

if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI ?? '';
} else {
  dbURI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/';
}

connectToDatabase(dbURI);

app.get("/", (req: Request, res: Response) => {
	res.send("Hello, World! MongoDB connected successfully!");
});

/*
 * Search for products based on the search term and filter. If the products are not found in the database,
 * scrape the products from multiple websites and store them in the database. Return the products based on the
 * topN and comparisonWebsites filters.
 *
 * POST /products
 * Request body:
 * {
 *   "search_term": "laptop",
 *   "country": "IN",
 *   "filter": "price",
 *   "topN": 5,
 *   "comparisonWebsites": ["amazon", "flipkart"]
 * }
 *
*/
app.post("/products", async (req: Request, res: Response) => {
	// TODO: code needs to be refactored, this endpoint handles too much logic
	const { search_term, country, filter, topN, comparisonWebsites } = req.body;
	const page = typeof req.query.page === 'string' ? parseInt(req.query.page) : 1;
	const limit = typeof req.query.limit === 'string' ? parseInt(req.query.limit) : 10;

	if (!search_term) {
		res.status(400).send({
			error: "search_term is required",
		});
		return;
	}

	try {
		// Define a filter object based on the provided filter parameter
		let filterObject: FilterObject = {
			fieldToFilter: ""
		};

		if (filter) {
			filterObject.fieldToFilter = filter; // Replace 'fieldToFilter' with the actual field you want to filter
		}

		// Search for existing products in the database based on the search term and filter
		const existingProducts = await findProducts(search_term, filterObject, page, limit);

		if (existingProducts.length > 0) {
			console.log("Existing products found in the database")
			// If there are existing products, return them
			res.send({ products: existingProducts });
			return;
		} else {
			console.log("No existing products found in the database")
			// If no existing products, perform scraping and store in the database
			const products = await Promise.all([
				findProductsOnAmazon(search_term, country),
				findProductsOnFlipkart(search_term, country),
				findProductsOnSnapdeal(search_term, country),
				findProductsOnAlibaba(search_term, country),
			]);
			
			// Insert the scraped products into the database with website information
			const websites = ["amazon", "flipkart", "snapdeal", "alibaba"];
			// const websites = ["alibaba"];

			const db_promises: any = [];  // TODO: Fix the type of db_promises

			for (let i = 0; i < products.length; i++) {
				const productsWithWebsite = products[i].map((product: ProductInterface) => ({
					...product,
					website: websites[i],
					search_term,
					reviews: product.reviews || 0,
				}));

				db_promises.push(Product.insertMany(productsWithWebsite));
			}

			const insertedProducts: any = await Promise.all(db_promises);  // TODO: Fix the type of insertedProducts

			// Combine the results from different websites into a single array
			const allProducts = insertedProducts.flat();

			
			// Apply topN filter if specified
			if (topN) {
				allProducts.sort((a, b) => b.reviews - a.reviews); // Sort by reviews in descending order
				allProducts.splice(topN); // Keep only the top N products
			}

			// Apply comparisonWebsites filter if specified
			if (comparisonWebsites) {
				const filteredProducts = allProducts.filter((product) =>
					comparisonWebsites.includes(product.website)
				);
				res.send({ products: filteredProducts });
			} else {
				res.send({ products: allProducts });
			}
		}
	} catch (error) {
		console.error("Error:", error);
		res.status(500).send("Internal Server Error");
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
import  express from "express";
import dotenv from "dotenv";

import authRoutes from './routes/auth.routes.js '
// Initialize express application
const app = express();

// Configure environment variables
dotenv.config();

// Set the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Define the root route
app.get("/", (req, res) => {
    res.send("hello world !");
});

app.use("/api/auth",authRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

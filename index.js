import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));
app.use(ProductRoute);

const PORT = 80; // atau port apa pun yang Anda inginkan
app.listen(PORT, () => console.log(`Server Up and Running on port ${PORT}...`));

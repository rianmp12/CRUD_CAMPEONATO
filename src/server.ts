import express from "express";
import swaggerUi from "swagger-ui-express";
import { router } from "./routes";
import swaggerDocs from "./swagger.json";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



app.use(router);

app.listen(4003, () => console.log("Server is running on PORT 4003"));
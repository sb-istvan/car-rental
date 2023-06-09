import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import petRoutes from "./cars/routes/cars.routes.js";

const app = express();
const port = 3333;

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Car Rental API",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./cars/routes/*.js"],
};

app.use(cors());
app.use(express.json());

app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJSDoc(swaggerSpec))
);

app.use("/cars", petRoutes);

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () =>
    console.log(`[server]: Server is running at http://localhost:${port}`)
  );
}

export default app;

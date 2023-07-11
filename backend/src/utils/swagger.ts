import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Tickets API ",
        version: "0.1.0",
        description:
          "This is a simple Tickets API application made with Express and documented with Swagger",
      },
      servers: [
        {
          url: "http://localhost:3001",
        },
      ],
    },
    apis: ["./src/routes/*.ts", "./src/schema/*.ts"],
  };

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocumentation = (app: Express) => {
    // Swagger page
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    // Docs in JSON format
    app.get("/docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });

}

export default swaggerDocumentation;
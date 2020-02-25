import * as swaggerUi from "swagger-ui-express";
import * as swaggerJsdoc from "swagger-jsdoc";
import * as express from "express";
import { env } from "./util";

const router = express.Router();
const host: string = env.NODE_ENV === "development" ? "localhost:3000" : "";

const options = {
  swaggerDefinition: {
    info: {
      title: "Test Project",
      version: "0.1.0",
      description: "Test Project API Swagger"
    },
    schemes: ["http"],
    host: `${host}`,
    basePath: "/",
    tags: [
      {
        name: "계정",
        description: ""
      }
    ]
  },
  apis: ["apis/*.yaml"]
};

const specs = swaggerJsdoc(options);

router.use(
  "/apis",
  swaggerUi.serve,
  swaggerUi.setup(specs, false, { docExpansion: "none" })
);

export default router;

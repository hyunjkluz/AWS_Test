import * as express from "express";
import * as compression from "compression";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import * as useragent from "express-useragent";

import { env } from "./util";
import { Err } from "./interfaces";
import routes from "./routes";
import swaggerDocs from "./swaggerDocs";

const app = express();
const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200
};

app.set("trust proxy", true);
app.use(helmet());
app.use(morgan(env.NODE_ENV === "development" ? "dev" : "combined"));
app.use(compression());
app.use(bodyParser.json({ limit: "1mb" }));
app.use(bodyParser.raw({ limit: "20mb" }));
app.use(bodyParser.text({ limit: "1mb" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
    limit: "100kb"
  })
);
app.use(useragent.express());
app.use(cors(corsOptions));
app.use(swaggerDocs);
app.use("/", routes);

app.get("/favicon.ico", (req, res) => {
  res.status(204);
  res.end();
});

// catch 404 and forward to error handler
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const err = new Error("Not Found") as Err;
    err.status = 404;
    next(err);
  }
);

/**
 * Error Handler
 */
app.use(
  (
    err: Err,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err);
    console.error(err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      data: err.data
    });
    res.end();
  }
);

export default app;

import { config } from "dotenv";
config({ path: `${__dirname}/../.env` });
import { env } from "./util";
import app from "./app";

const port = env.PORT || 3000;

let isDisableKeepAlive = false;
app.use((req, res, next) => {
  if (isDisableKeepAlive) {
    res.set("Connection", "close");
  }
  next();
});

const server = app.listen(port, () => {
  console.log(`listening on port ${port}!`);

  if (env.NODE_ENV === "production") {
    process.send("ready");
  }
});

process.on("SIGINT", () => {
  isDisableKeepAlive = true;

  server.close(() => {
    console.log("server closed");
    process.exit(0);
  });
});

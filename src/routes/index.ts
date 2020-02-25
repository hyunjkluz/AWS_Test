import { Router, Request, Response, NextFunction } from "express";
import auth from "./auth";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send("GENIE");
    res.status(200);
    res.end();
    return true;
  } catch (e) {
    next(e);
    return false;
  }
});

router.use("/auth", auth);

export default router;

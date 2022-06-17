import express, { Request, Response, NextFunction } from "express";
import path from "path";

const app = express();

import os from "os";

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.send("Here to serve!");
  } catch (error) {
    next(error);
  }
});

app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username }),
);

const PORT = 3002;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});

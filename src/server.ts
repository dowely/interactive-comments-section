import express, { Express, Request, Response } from "express";

const server: Express = express();

server.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

server.listen(5055);

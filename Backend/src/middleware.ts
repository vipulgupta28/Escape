import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import express from "express";

export const applyMiddlewares = (app: express.Application) => {
  app.use(cors());
  app.use(helmet());
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  app.use(bodyParser.json());
};

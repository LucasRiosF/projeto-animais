import express from "express";
import { config } from "dotenv";

import rotas from "./routes/index.routes.js";


config();

const port = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use(rotas);


app.get("/", (req, res) => {
  return res.status(200).send({ message: "Olá Mundo!" });
});

app.listen(port, () =>
  console.log(`Server started on http://localhost:${port}`)
);
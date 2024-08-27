import { Hono } from "hono";
import { book } from "./routes/books.js";
import { logger } from "hono/logger";
import { HTTPException } from "hono/http-exception";

const isProd = process.env.NODE_ENV === "production";

const app = new Hono();
app.use(logger());

app.route("/api/books", book);

app.all("/api/*", (c) => {
  throw new HTTPException(404, { message: "Not Found" });
});

app.get("*", async (c) => {
  const indexPath = isProd ? "assets:templates:index.html" : "root:index.html";
  const template = (await useStorage().getItem(indexPath)) as string;
  return c.html(template);
});

export default app;

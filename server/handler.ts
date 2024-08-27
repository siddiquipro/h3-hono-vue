import app from "./app.js";

export default defineEventHandler(async (event) => {
  const webReq = toWebRequest(event);
  return app.fetch(webReq);
});

const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://www.swiggy.com/dapi/", // Swiggy API URL
    changeOrigin: true,
    pathRewrite: {
      "^/api": "", // Remove /api prefix when forwarding to Swiggy API
    },
  })
);

app.listen(5000, () => {
  console.log("Proxy server running on port 5000");
});

const express = require("express");
const proxy = require("express-http-proxy");

const APP_A = process.env.APP_A || "http://localhost:3000";
const APP_B = process.env.APP_B || "http://localhost:3001";
const APP_C = process.env.APP_C || "http://localhost:3002";

const router = express.Router();

router.use(
  "/app-a/*",
  proxy(APP_A, {
    proxyReqPathResolver: (req) => {
      return `/${req.params[0]}`;
    },
  })
);

router.use(
  "/app-b/*",
  proxy(APP_B, {
    proxyReqPathResolver: (req) => {
      return `/${req.params[0]}`;
    },
  })
);

router.use(
  "/app-c/*",
  proxy(APP_C, {
    proxyReqPathResolver: (req) => {
      return `/${req.params[0]}`;
    },
  })
);

module.exports = router;

const express = require("express");
const cors = require("cors");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
const swaggerUi = require("swagger-ui-express");
const { SWAGGER_PATH } = require("../config");
const swaggerDocument = require(SWAGGER_PATH);

module.exports = function({
  HomeRoutes,
  RoleRoutes,
  AuthRoutes,
  UserRoutes,
  RequestRoutes,
  FormTypeRoutes,
  StepRoutes
}) {
  const router = express.Router();
  const apiRoute = express.Router();

  apiRoute
    .use(cors())
    .use(express.json())
    .use(compression());

  apiRoute.use("/home", HomeRoutes);
  apiRoute.use("/role", RoleRoutes);
  apiRoute.use("/auth", AuthRoutes);
  apiRoute.use("/user", UserRoutes);
  apiRoute.use("/request", RequestRoutes);
  apiRoute.use("/formType", FormTypeRoutes);
  apiRoute.use("/step", StepRoutes);

  router.use("/api", apiRoute);
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);

  return router;
};

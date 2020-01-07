"use strict";

const Route = use("Route");

Route.post("users", "userController.store");
Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Routes.get("/files", "FileController.show");
Route.post("/files", "FileController.store");

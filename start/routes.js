"use strict";

const Route = use("Route");

Route.post("users", "userController.store");
Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.get("/files/:id", "FileController.store");
Route.post("/files", "FileController.store");

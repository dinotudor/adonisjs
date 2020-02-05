"use strict";

const Route = use("Route");

Route.post("users", "userController.store").validator("User");

Route.post("sessions", "SessionController.store").validator("Session");

Route.post("passwords", "ForgotPasswordController.store");
Route.put("passwords", "ForgotPasswordController.update");

Route.get("/files/:id", "FileController.store");

Route.group(() => {
  Route.post("/files", "FileController.store");

  Route.resource("projects", "ProjectController").apiOnly();
  Route.resource("projects.tasks", "TaskController").apiOnly();
}).middleware(["auth"]);

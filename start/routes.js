"use strict";

const Route = use("Route");

Route.post("users", "userController.store");
Route.post("sessions", "SessionController.store");

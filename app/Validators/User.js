"use strict";

class User {
  get ValidatorAll() {
    return true;
  }

  get rules() {
    return {
      username: "require|unique:users",
      email: "require|email|unique:users",
      password: "required|confirmed:users"
    };
  }
}

module.exports = User;

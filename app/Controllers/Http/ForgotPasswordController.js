"use strict";

const crypto = require("crypto");
const User = use("App/Models/User");
const Mail = use("Mail");

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input("email");
      const user = await User.findByOrFail("email", email);

      user.token = crypto.randomBytes(10).toString("hex");
      user.token_created_at = new Date();

      await user.save();

      await Mail.send([""], {}, message => {
        message
          .to(user.email)
          .from("dino@dino.com", "Dino | Developer")
          .subject("Password recovery");
      });
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: "Email inválido" } });
    }
  }
}

module.exports = ForgotPasswordController;

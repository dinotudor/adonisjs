"use strict";

const File = use("App/Models/File");
const Helpers = use("Helpers");

class FileController {
  async store({ request, response }) {
    try {
      if (!request.file("file")) return;

      const upload = request.file("file", { size: "2mb" });

      const fileName = `${Date.now()}.${upload.subtybe}`;

      await upload.move(Helpers.tmpPath("uploads"), {
        name: fileName
      });

      if (!upload.move()) {
        throw upload.error();
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtybe: upload.subtybe
      });

      return file;
    } catch (err) {
      return response.status(err.status).send({ message: "Upload failed" });
    }
  }
}

module.exports = FileController;

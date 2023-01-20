const passport = require("passport");
const usersController = require("../controllers/usersController");

module.exports = (app, upload) => {
  // GET -> OBTENER DATOS
  // POST -> ALMACENAR DATOS
  // PUT -> ACTUALIZAR DATOS
  // DELETE -> ELIMINAR DATOS

  app.post("/api/users/create", usersController.register);
  app.post(
    "/api/users/createWhitImage",
    upload.array("image", 1),
    usersController.registerWhitImage
  );
  app.post("/api/users/login", usersController.login);

  app.put(
    "/api/users/update",
    passport.authenticate('jwt', {session: false}),
    upload.array("image", 1),
    usersController.updateWithImage
  );
  app.put(
    "/api/users/updateWithoutImage",
    passport.authenticate('jwt', {session: false}),
    usersController.updateWithoutImage
  );
};

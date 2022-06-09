import users from "../dataBase";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const loginUserService = (email, password) => {
  const user = users.find((user) => user.email === email);

  if (!user) {
    return "Email ou senha inválidos";
  }

  //Comparando senhas criptografadas
  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Email ou senha inválidos";
  }

  //Gerando token com a biblioteca
  const token = jwt.sign({ email: email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.id
  });

  return token;
};
export default loginUserService;

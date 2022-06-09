import jwt from "jsonwebtoken";

const verifyAuthTokenMiddleware = (request, response, next) =>{

    let token = request.headers.authorization;

    if(!token){
        return response.status(401).json({message: "Token não encontrado."})
    }
  
    token = token.split(" ")[1];
  
    jwt.verify(token, "SECRET_KEY", (error, decoded) => {
        if(error){
            return response.status(401).json({ message: "Token inválido."})
        }
        next();
    })
}

export default verifyAuthTokenMiddleware;

import jwt_decode from "jwt-decode";
import users from "../dataBase";

const verifyAdminmiddleware = (request, response, next) => {

    let token = request.headers.authorization;
    
    token = token.split(" ")[1];

    const decoded = jwt_decode(token);

    const { email } = decoded;

    const userAdmin = users.find((user) => user.email === email);
    
    if(userAdmin.isAdm === false){
        return response.status(400).json({message: "O usuário não tem as autorizaçõesnecessárias!"}) ;
    }
    next();
}

export default verifyAdminmiddleware;


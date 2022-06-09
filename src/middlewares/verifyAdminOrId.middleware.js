import jwt_decode from "jwt-decode";
import users from "../dataBase";

const verifyAdminOrIdmiddleware = (request, response, next) => {

    let token = request.headers.authorization;
    
    let id = request.params.id;

    token = token.split(" ")[1];

    const decoded = jwt_decode(token);

    const { email } = decoded;

    const user = users.find((user) => user.email === email);

    if(user.isAdm === false && id !== user.id){
        return response.status(400).json({message: "O usuário não tem as autorizaçõesnecessárias!"}) ;
    }

    next();
}

export default verifyAdminOrIdmiddleware;
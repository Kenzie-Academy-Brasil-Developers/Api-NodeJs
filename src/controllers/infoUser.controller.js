import jwt_decode from "jwt-decode";
import infoUserService from "../services/infoUser.service";

const infoUserController = async (request, response) => {

    let token = request.headers.authorization;
    
    token = token.split(" ")[1];

    const decoded = jwt_decode(token);

    const { sub } = decoded;
    
    const userInfo = await infoUserService(sub);
    
    return response.json({message: userInfo});
}

export default infoUserController;
import users from "../dataBase";

const verifyEmailAvailabilityMiddleware = (request, response, next) => {

    const { email } = request.body;

    const userAlready = users.find((user) => user.email === email);

    if(userAlready){
        return response.status(400)
        .json({ message: "Este email já está sendo utilizado!" });
    }
    next();
}

export default verifyEmailAvailabilityMiddleware;
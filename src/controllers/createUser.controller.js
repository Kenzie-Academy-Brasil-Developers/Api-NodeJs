import createUserService from "../services/createUser.service"

const createUserController = async (request, response) => {

    const { name, email, password, isAdm } = request.body;

    const newUser = await createUserService(name, email, password, isAdm);

    return response.json({newUser});
}

export default createUserController;

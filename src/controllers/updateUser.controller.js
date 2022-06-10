import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {

    const { id } = request.params;
    const { name, email, password } = request.body;

    const userUpdate = updateUserService(id, name, email, password);

    return response.json(userUpdate);
}

export default updateUserController;
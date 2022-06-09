import updateUserService from "../services/updateUser.service";

const updateUserController = (request, response) => {

    const { id } = request.params;
    const { name, email, isAdm } = request.body;

    const userUpdate = updateUserService(id, name, email, isAdm);

    return response.json(userUpdate);
}

export default updateUserController;
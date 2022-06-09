import deleteUserService from "../services/deleteUser.service";

const deleteUserController = async (request, response) => {

    const { id } = request.params;

    const userDelete = await deleteUserService(id);

    return response.json(userDelete);
}

export default deleteUserController;
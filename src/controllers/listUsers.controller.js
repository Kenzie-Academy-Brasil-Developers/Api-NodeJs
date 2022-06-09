import listUserService from "../services/listUsers.service"

const listUserController = (request, response) => {

    const { isAdm } =  request.body;

    const usersList = listUserService(isAdm);

    return response.json(usersList);
}

export default listUserController;

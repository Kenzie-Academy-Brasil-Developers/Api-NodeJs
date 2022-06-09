import infoUserService from "../services/infoUser.service";

const infoUserController = async (request, response) => {

    const { id } = request.params;

    const userInfo = await infoUserService(id);

    return response.json({message: userInfo});

}

export default infoUserController;
import users from "../dataBase";

const infoUserService = (id) => {

    const userInfo = users.find((user) => user.id === id);

    if(!userInfo){
        return "O usuário não existe no banco de dados!"
    }

    return userInfo;
}

export default infoUserService;
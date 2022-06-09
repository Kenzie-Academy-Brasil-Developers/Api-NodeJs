import users from "../dataBase";

const listUserService = (isAdm) => {

    if(isAdm === false){
        return "O usuário não tem a autorização necessária."
    }

    return users;
}

export default listUserService;
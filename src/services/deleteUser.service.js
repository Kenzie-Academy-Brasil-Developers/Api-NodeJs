import users from "../dataBase";

const deleteUserService = (id) => {

    const userIndex = users.findIndex((user) => user.id === id);

    if(userIndex === -1){
        return "Usuário não encontrado!"
    }

    users.splice(userIndex, 1);

    return "Usuário excluíudo com sucesso!"
}

export default deleteUserService;
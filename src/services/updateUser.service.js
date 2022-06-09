import users from "../dataBase";

const updateUserService = (id, name, email, isAdm) => {

    const userIndex = users.findIndex((user) => user.id === id);

    const userUpdade = {
        id,
        updatedAt: Date()
    }

    if(name) {userUpdade.name = name};
    if(email) {userUpdade.email = email};

    users[userIndex] = { ...users[userIndex], ...userUpdade};

    return users[userIndex];
}

export default updateUserService;
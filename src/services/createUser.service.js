import {v4 as uuidv4} from "uuid";
import users from "../dataBase";
import * as bcrypt from "bcryptjs";

const createUserService = async (name, email, password,isAdm) => {

    const hashedPassword = await bcrypt.hash(password, 10);

    const userReturn = {
        name,
        email,
        id: uuidv4(),
        createdOn: Date(),
        updatedAt: Date(),
        isAdm
     }

    const newUser = {...userReturn, password: hashedPassword
    }

    users.push(newUser);

    return userReturn;
}

export default createUserService;
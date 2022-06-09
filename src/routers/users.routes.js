import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import infoUserController from "../controllers/infoUser.controller";
import listUserController from "../controllers/listUsers.controller";
import loginUserController from "../controllers/loginUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import verifyAdminmiddleware from "../middlewares/verifyAdmin.middleware";
import verifyAdminOrIdmiddleware from "../middlewares/verifyAdminOrId.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";
import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const router = Router();

router.post('', verifyEmailAvailabilityMiddleware, createUserController);
router.post('/login', loginUserController);
router.get('', verifyAuthTokenMiddleware,
verifyAdminmiddleware,
listUserController);
router.get('/profile/:id', verifyAuthTokenMiddleware, infoUserController);
router.patch('/:id', verifyAuthTokenMiddleware, 
verifyAdminOrIdmiddleware,
updateUserController);
router.delete('/:id', verifyAuthTokenMiddleware,
verifyAdminOrIdmiddleware,
deleteUserController);

export default router;
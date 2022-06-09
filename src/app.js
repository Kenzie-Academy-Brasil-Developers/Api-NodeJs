import express from "express";
import useRouter from "./routers/users.routes"; 

const port = 3001;

const app = express();
app.use(express.json());


app.use('', useRouter);
app.use('/users', useRouter);

app.listen(port);

export default app;
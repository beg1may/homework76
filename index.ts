import express from "express";
import cors from "cors";
import message from './Api/message';

const app = express();
app.use(express.json());
app.use(cors());

const port = 8000;
app.use('/messages', message);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});
import express, { Request, Response, Router} from 'express';
import { MessageId } from '../types';
import { randomUUID } from 'crypto';

const message: Router = express.Router();
const messages: MessageId[] = [];

message.get('/', (req: Request, res: Response) => {
  return res.send(messages);
});

message.post('/', (req: Request, res: Response) => {
  try {
    const { author, message } = req.body;
    if (!author || !message || message === '' || author === '') {
      return res.status(400).send('Author and message must be present in the request' );
    }
    const id = randomUUID();
    const datetime = new Date().toISOString();
    messages.unshift({
      id,
      author,
      message,
      datetime,
    });
    messages.splice(30);

    res.json(messages);
  } catch (error) {
    console.error(error);
  }
});

export default message;

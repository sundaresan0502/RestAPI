import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});

router.get('/:ticketId', (req, res) => {
  return res.send(req.context.models.tickets[req.params.messageId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.context.me.id,
  };

  req.context.models.tickets[id] = tickets;

  return res.send(tickets);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.ticketsId]: ticket,
    ...otherMessages
  } = req.context.models.tickets;

  req.context.models.tickets = otherMessages;

  return res.send(ticket);
});

export default router;

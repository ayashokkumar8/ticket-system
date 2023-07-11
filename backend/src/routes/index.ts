import { Router } from 'express';

import TicketRouter from './ticket';

const routes = Router();

routes.use('/tickets', TicketRouter);

export default routes;
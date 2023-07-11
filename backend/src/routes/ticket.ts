import { Router } from 'express';

import { createTicketController, getTicketController, updateTicketController, deleteTicketController } from '../controller/ticket.controller';
const TicketRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tickets:
 *       type: object
 *       required:
 *         - client
 *         - issue
 *         - status
 *         - deadline
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the ticket
 *         client:
 *           type: string
 *           description: The title of your ticket
 *         issue:
 *           type: string
 *           description: The ticket author
 *         deadline:
 *           type: string
 *           format: date
 *           description: Whether you have finished reading the ticket
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the ticket was added
 *         updatedAt:
 *           type: string
 *           format: date
 *           description: The date the ticket was added
 *       example:
 *         id: d5fE_asz
 *         client: The New Turing Omnibus
 *         issue: Alexander K. Dewdney
 *         status: open
 *         deafline: 2023-07-10T04:05:06.157Z
 *         createdAt: 2023-07-10T04:05:06.157Z
 *         updatedAt: 2023-07-10T04:05:06.157Z
 */

/**
 * @swagger
 * tags:
 *   name: Tickets
 *   description: The Tickets managing API
 * /tickets:
 *   get:
 *     summary: Lists all the Tickets
 *     tags: [Tickets]
 *     responses:
 *       200:
 *         description: The list of the Tickets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *   post:
 *     summary: Create a new ticket
 *     tags: [Tickets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createTicketSchema'
 *     responses:
 *       200:
 *         description: The created ticket.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TicketDocument'
 *       500:
 *         description: Some server error
 * /tickets/{id}:
 *   put:
 *    summary: Update the ticket by the id
 *    tags: [Tickets]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ticket id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/updateTicketSchema'
 *    responses:
 *      200:
 *        description: The ticket was updated
 *      404:
 *        description: The ticket was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the ticket by id
 *     tags: [Tickets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ticket id
 *
 *     responses:
 *       200:
 *         description: The ticket was deleted
 *       404:
 *         description: The ticket was not found
 */
TicketRouter.get('/', getTicketController);
TicketRouter.post('/', createTicketController);
TicketRouter.put('/:id', updateTicketController);
TicketRouter.delete('/:id', deleteTicketController);

export default TicketRouter;
// Import core
import { Request, Response } from "express";
// Import customs
import HttpResponseHandle from "../utils/HttpResponseHandle";
import { CreateTicketInput, UpdateTicketInput } from "../schema/ticket.schema";
import { createTicketService, findTicketsService, findTicketService, findAndUpdateTicketService, deleteTicketService } from "../service/ticket.service";

// To create a new ticket to pass basic information.
const createTicketController = async (
    req: Request<{}, {}, CreateTicketInput["body"]>,
    res: Response
): Promise<Response> => {
    try {
        const body = req.body;

        const ticket = await createTicketService(body);

        return res.status(201).send(HttpResponseHandle(201, "Ticket create successfully", null, ticket));
    } catch (error) {
        return res.status(500).send(HttpResponseHandle(500, "", error, null));
    }
}

// Get all tickets created.
const getTicketController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    try {

        const ticketInfo = await findTicketsService();

        return res.status(200).send(HttpResponseHandle(200, "ok", null, ticketInfo));
    } catch (error) {
        return res.status(500).send(HttpResponseHandle(500, "Internal server error", error, null));
    }
}

// update ticket information based upon given ticket id.
const updateTicketController = async (
    req: Request<UpdateTicketInput["params"]>,
    res: Response
) => {
    try {
        const body = req.body;
        const _id = req.params.id;

        const ticketInfo = await findTicketService({ _id });

        if (!ticketInfo) {
            return res.status(404).send(HttpResponseHandle(404, "ticket Not Found", null, null));
        }

        const updatedTicket = await findAndUpdateTicketService({ _id }, body, {
            new: true,
        });

        return res.status(200).send(HttpResponseHandle(200, "Ticket updated successfully", null, updatedTicket));
    } catch (error) {
        return res.status(500).send(HttpResponseHandle(500, "Internal server error", error, null));
    }
}

// delete ticket information based upon given ticket id.
const deleteTicketController = async (
    req: Request<UpdateTicketInput["params"]>,
    res: Response
): Promise<Response> => {
    try {
        const _id = req.params.id;

        const ticketinfo = await findTicketService({ _id });

        if (!ticketinfo) {
            return res.status(404).send(HttpResponseHandle(404, "ticket Not Found", null, null));
        }

        await deleteTicketService({ _id });

        return res.status(200).send(HttpResponseHandle(200, "Ticket deleted successfully", null, null));
    } catch (error) {
        return res.status(500).send(HttpResponseHandle(500, "Internal server error", error, null));
    }
}

export {
    createTicketController,
    getTicketController,
    updateTicketController,
    deleteTicketController,

}
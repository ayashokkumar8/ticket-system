// Import third party
import {
    FilterQuery,
    QueryOptions,
    UpdateQuery
} from "mongoose";
// Import customs
import TicketModel, { TicketDocument, TicketInput } from "../models/ticket.model";

// service for create ticket.
const createTicketService = async (
    input: TicketInput
) => {
    return TicketModel.create(input);
}

// service for find all ticket.
const findTicketsService = async () => {
    return TicketModel.find();
}

// service for find single ticket and use it only internal.
const findTicketService = async (
    query: FilterQuery<TicketDocument>,
    options: QueryOptions = { lean: true }
) => {
    return TicketModel.findOne(query, {}, options);
}

// service for find ticket and update information.
const findAndUpdateTicketService = async (
    query: FilterQuery<TicketDocument>,
    update: UpdateQuery<TicketDocument>,
    options: QueryOptions
) => {
    return TicketModel.findOneAndUpdate(query, update, options);
}

// service for delete existing ticket.
const deleteTicketService = async (query: FilterQuery<TicketDocument>) => {
    return TicketModel.deleteOne(query);
}

export {
    createTicketService,
    findTicketsService,
    findTicketService,
    findAndUpdateTicketService,
    deleteTicketService
}
// Import custom
import { ITicketInput, ITicketResponse } from "../utils/interface";
import { fetchData, postData, putData } from "../utils/api";

// api services for get tickets.
const getTickets = async () => {
    return await fetchData("/tickets");
}

// api services for create ticket.
const createTicket = async (params: ITicketInput) => {
    return await postData("/tickets", params);
}

// api services for update ticket.
const updateTicket = async (params: ITicketResponse, id: string) => {
    return await putData(`/tickets/${id}`, params)
}

export {
    getTickets,
    createTicket,
    updateTicket
}
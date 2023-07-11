// Import third party
import mongoose from "mongoose";

// interface for API body for create ticket.
export interface TicketInput {
    client: string;
  issue: string;
  status: string;
  deadline: Date;
}

// extend this interface with TicketInput interface to get all info.
export interface TicketDocument extends TicketInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

// create schema for tickets.
const ticketSchema = new mongoose.Schema(
  {
    client: { type: String, required: true },
    issue: { type: String, required: true },
    status: { type: String, required: true },
    deadline: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const TicketModel = mongoose.model<TicketDocument>("ticket", ticketSchema);

export default TicketModel;
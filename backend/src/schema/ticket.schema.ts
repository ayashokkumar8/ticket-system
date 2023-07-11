// Import third party
import { object, string, date, TypeOf } from "zod";

// create object for valididation payload comming form API and it retrun error message if API payload not follow this rule.
const payload = {
  body: object({
    client: string({
      required_error: "client is required",
    }),
    issue: string({
      required_error: "issue is required",
    }).max(120, "issue should be at least 120 characters long"),
    status: string({
      required_error: "status is required",
    }),
    deadline: date({
      required_error: "deadline is required",
    }),
  }),
};

// create object valiadte id comming from API for update or delete data.
const params = {
  params: object({
    id: string({
      required_error: "ticket id is required",
    }),
  }),
};


// assign payload and params for each function. to validate when API call occured.
export const createTicketSchema = object({
  ...payload,
});

export const updateTicketSchema = object({
  ...payload,
  ...params,
});

export const deleteTicketSchema = object({
  ...params,
});

export const getTicketsSchema = object({});

export const getTicketSchema = object({
    ...params,
});

// create types for each schema of functions.
export type CreateTicketInput = TypeOf<typeof createTicketSchema>;
export type UpdateTicketInput = TypeOf<typeof updateTicketSchema>;
export type GetTicketsInput = TypeOf<typeof getTicketsSchema>;
export type GetTicketInput = TypeOf<typeof getTicketSchema>;
export type DeleteTicketInput = TypeOf<typeof deleteTicketSchema>;

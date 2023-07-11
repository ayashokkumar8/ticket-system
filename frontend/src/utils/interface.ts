
//interface for the Helper
export interface ApiUrls {
    test: string;
    development: string;
    production: string;
}

// Define function type for Fetch, Put, Post, Patch, Delete,
export type IFetchRequestFn = (url: string, options?: any) => Promise<any>;
export type IPosthRequestFn = (
    url: string,
    data: any,
    options?: any
) => Promise<any>;
export type IPutRequestFn = (
    url: string,
    data?: any,
    options?: any
) => Promise<any>;
export type IDeleteRequestFn = (url: string, options?: any) => Promise<any>;



// interface for ticket post request.
export interface ITicketInput {
    client: string;
    issue: string;
    status: string;
    deadline: string;
}

// interface for ticket get request.
export interface ITicketResponse extends ITicketInput {
    _id: string;
    createdAt?: Date;
    updatedAt?: Date;
}
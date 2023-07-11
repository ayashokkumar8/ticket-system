import { createContext, useEffect, useState, FC, ReactElement } from "react";
import { ITicketResponse } from './interface';
import useFlag from "../hooks/useFlag";
import { getTickets } from "../services/Ticket.service";

/**
 * Define TicketContext and his types
 */
interface ITicketsContext {
    tickets: ITicketResponse[],
    setTickets: (ticket: any) => void;
    selectedTicket: any;
    setselectedTicket: (ticket: any) => void;
    showCreateModal: boolean;
    toggleCreateModal: () => void;
    showUpdateModal: boolean;
    toggleUpdateModal: () => void;
    error: string;
    setError: any;
    handleClickCreateTicket: () => void;
}
const defaultTicketContextState = {
    tickets: [],
    setTickets: () => { },
    selectedTicket: {},
    setselectedTicket: () => { },
    error: '',
    setError: () => { },
    showCreateModal: false,
    toggleCreateModal: () => { },
    showUpdateModal: false,
    toggleUpdateModal: () => { },
    handleClickCreateTicket: () => { },
};
const TicketContext = createContext<ITicketsContext>(defaultTicketContextState);

interface Props {
    children: any;
}

export const TicketsContextProvider: FC<Props> = ({
    children,
  }: Props): ReactElement => {
    
    // store tisket state and toggle modals for create and update
    const [tickets, setTickets] = useState<ITicketResponse[]>([]);
    const [selectedTicket, setselectedTicket] = useState<ITicketResponse>();
    const [error, setError] = useState<string>('');
    const [showCreateModal, toggleCreateModal] = useFlag();
    const [showUpdateModal, toggleUpdateModal] = useFlag();

    // fire toggle when click on create button to open modal
    const handleClickCreateTicket = () => {
        toggleCreateModal();
    }

    // fetch tickets from api.
    const fetchTickets = async () => {

        await getTickets().then(res => {
            setTickets(res.data);
        }).catch(e => {
            setError(e.message);
        })
    };

    useEffect(() => {
        fetchTickets();
    }, [selectedTicket]);

    return (
        <TicketContext.Provider value={{
            tickets,
            selectedTicket,
            setTickets,
            setselectedTicket,
            showCreateModal,
            showUpdateModal,
            toggleCreateModal,
            toggleUpdateModal,
            error,
            setError,
            handleClickCreateTicket,
        }}>
        {children}
        </TicketContext.Provider>
    );

};

export default TicketContext
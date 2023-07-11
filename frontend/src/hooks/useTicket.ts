// Import core
import { useContext, useEffect } from "react";
// Import third parts.
import dayjs from "dayjs";
// Import custom
import TicketContext from "../utils/TicketContext";
import { ITicketResponse } from '../utils/interface';
import { getTickets, createTicket, updateTicket } from "../services/Ticket.service";



const useTicket = () => {

    // get states from ticket context.
    const {
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
    } = useContext(TicketContext);

    // handle click on update and open modal for update form and set state for selected ticket.
    const handleClickUpdateTicket = async (ticket: ITicketResponse) => {
        const formatTicket = {
            ...ticket,
            deadline: dayjs(ticket.deadline).format("YYYY-MM-DD")
        }
        setselectedTicket(formatTicket);
        toggleUpdateModal();
    }

    const fetchTickets = async () => {

        await getTickets().then(res => {
            setTickets(res.data);
        }).catch(e => {
            setError(e.message);
        })
    };

    // create new ticket when fill the form and submit.
    const createNewTicket = async (ticket: any) => {
        await createTicket(ticket).then(res => {
            console.log(res)
            const updatedTickets = tickets;
            updatedTickets.push(res.data)
            setTickets(updatedTickets);
            toggleCreateModal();
        }).catch(e => {
            setError(e.message);
        })
    }
    
    // update ticket when click on update bution on form.
    const changeTicket = async (ticket: any) => {
        await updateTicket(ticket, ticket._id).then(res => {
            if (res.status === 200) {
                const updatedTickets = tickets.map((item: ITicketResponse) => item._id === ticket?._id ? ticket : item);
                setTickets(updatedTickets);
                toggleUpdateModal();
            }
        }).catch(e => {
            setError(e.message);
        })
    }

    // when fire toggle switch change status and update ticket.
    const changeTicketStatus = async (ticket: any) => {
        await updateTicket(ticket, ticket._id).then(res => {
            if (res.status === 200) {
                const updatedTickets = tickets.map((item: ITicketResponse) => item._id === ticket?._id ? ticket : item);
                setTickets(updatedTickets);
                // toggleUpdateModal();
            }
        }).catch(e => {
            setError(e.message);
        })
    }

    
    useEffect(() => {
        fetchTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
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
        handleClickUpdateTicket,
        createNewTicket,
        changeTicket,
        changeTicketStatus
    }

}

export default useTicket
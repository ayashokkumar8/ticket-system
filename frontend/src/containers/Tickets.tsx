// import core
import { useEffect } from 'react'
import { Button } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// Import custom
import TicketCard from '../components/TicketCard';
import useTicket from '../hooks/useTicket';
import AddTicket from '../components/AddTicket';
import UpdateTicket from '../components/UpdateTicket';
import { StyledTicketsContainer, StyledTicketButtonContainer, StyledTicketTitle, StyledTicketTitlecontainer, StyledTicketTitleIcon } from '../styles/TicketsContainer';

const Tickets = () => {
    // get all state and functions for show and manage tickets.
    const {
        tickets,
        selectedTicket,
        createNewTicket,
        changeTicket,
        changeTicketStatus,
        handleClickCreateTicket,
        handleClickUpdateTicket,
        showCreateModal,
        toggleCreateModal,
        showUpdateModal,
        toggleUpdateModal,
    } = useTicket();

    useEffect(() => {
    }, [tickets, selectedTicket]);

    return (
        <StyledTicketsContainer>
            <StyledTicketTitlecontainer>
                <StyledTicketTitleIcon fontSize="large" color="primary" />
                <StyledTicketTitle >TimeLine</StyledTicketTitle>
            </StyledTicketTitlecontainer>
            {tickets ? (
                tickets.map((ticket, index) => (
                    <TicketCard key={index} ticketData={ticket} index={index + 1} onChangeStatus={changeTicketStatus} onClickIssue={handleClickUpdateTicket} />
                ))
            ) : (<></>)}

            {showCreateModal ? (
                <AddTicket onSubmitForm={createNewTicket} onCancelForm={toggleCreateModal} showModal={showCreateModal} initialForm={{}} />
            ) : (<> </>)}
            {showUpdateModal ? (
                <UpdateTicket onSubmitForm={changeTicket} onCancelForm={toggleUpdateModal} showModal={showUpdateModal} initialForm={selectedTicket ? selectedTicket : {}} />
            ) : (<> </>)}
            <StyledTicketButtonContainer>
                <Button variant="contained" size="medium" endIcon={<NavigateNextIcon />} style={{ marginRight: '10px' }} onClick={() => handleClickCreateTicket()} >
                    Create Ramdomly
                </Button>
                <Button variant="contained" size="medium" endIcon={<NavigateNextIcon />} onClick={() => handleClickCreateTicket()} >
                    Create New
                </Button>
            </StyledTicketButtonContainer>
        </StyledTicketsContainer>
    )
}

export default Tickets
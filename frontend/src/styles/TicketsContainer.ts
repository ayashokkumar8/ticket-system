// Import third parts
import styled from "styled-components";
import EventIcon from '@mui/icons-material/Event';

// styles for Ticket container component.
export const StyledTicketsContainer = styled.div`
min-height: 90%;
margin: 15px;
padding: 20px;
border 1px solid #b1b8bd;
`

export const StyledTicketButtonContainer = styled.div`
display: flex;
justify-content: end;
margin-top: 20px;
`

export const StyledTicketTitlecontainer = styled.div`
display: flex;
`
export const StyledTicketTitle = styled.p`
text-align: left;
font-weight: bold;
`

export const StyledTicketTitleIcon = styled(EventIcon)`
margin-top: 10px;
`
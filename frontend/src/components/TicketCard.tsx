// import core
import { ReactElement, FC } from 'react'
// Import third party
import { Grid, CardContent } from '@mui/material';
import dayjs from 'dayjs';
// Import custom
import { ITicketResponse } from '../utils/interface';
import { StyledTicketCard, StyledTicketCardIssue, StyledTicketRadio, StyledTicketSwitch, StyledTicketCardText } from '../styles/TicketCard';

// props for reusable ticket card component.
type Props = {
    onChangeStatus: (formData: ITicketResponse) => Promise<any>;
    onClickIssue: (formData: ITicketResponse) => Promise<any>;
    ticketData: any;
    index: number;
};

const TicketCard: FC<Props> = ({ onChangeStatus, onClickIssue, ticketData, index }: Props): ReactElement => {

    // set the color of statu of ticket.
    const statusNotification = (data: any) => {
        switch(data) {
          case data.status === 'closed':
            return "success"
          case dayjs().isSame(data.deadline) && data.status === 'opened':
            return "warning"
          case dayjs().isAfter(data.deadline) && data.status === 'opened':
            return "error"
          default:
            return "warning"
        }
      }

      // hnadle the clickon issue description to open modal  for update ticket.
      const handleClickOnIssue = () => {
        onClickIssue(ticketData);
      }

      // handle when click on switch call back to change status of ticket.
      const handleClickOnStatus = (value: boolean) => {
        const updatedStatusData = {
            ...ticketData,
            status: value ? 'closed' : 'opened'
        }
        onChangeStatus(updatedStatusData);
      }

    return (
        <StyledTicketCard sx={{ width: 500 }}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={2}>
                                <StyledTicketCardText>{index}</StyledTicketCardText>
                            </Grid>
                            <Grid item xs={10}>
                                <StyledTicketCardText>{ticketData.client}</StyledTicketCardText>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <StyledTicketCardText>{dayjs(ticketData.deadline).format('DD/MM/YYYY')}</StyledTicketCardText>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={8}>
                                <StyledTicketSwitch value={ticketData.status} onChange={(e) => handleClickOnStatus(e.target.checked)} checked={ticketData.status === 'closed'} />
                            </Grid>
                            <Grid item xs={4}>
                                <StyledTicketRadio value={ticketData.deadline} sx={{ color:  statusNotification(ticketData)}} color={statusNotification(ticketData)}   checked />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <StyledTicketCardIssue variant="body2" onClick={handleClickOnIssue}>{ticketData.issue}</StyledTicketCardIssue>
            </CardContent>
        </StyledTicketCard>
    )
}

export default TicketCard
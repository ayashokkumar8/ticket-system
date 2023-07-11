// import core
import { ReactElement, FC } from 'react'
// Import custom
import TicketForm from '../components/TicketForm';
import TicketModel from './TicketModel';
import { ITicketInput, ITicketResponse } from '../utils/interface';

// update ticket props.
type Props = {
  onSubmitForm: (formData: ITicketInput) => Promise<any>;
  onCancelForm: () => void;
  initialForm: Partial<ITicketResponse>;
  showModal: boolean;
};

const UpdateTicket: FC<Props> = ({ onSubmitForm, onCancelForm, initialForm, showModal }: Props): ReactElement => {

  // update ticket data format when click on submit vutton on form and send back to ticket contex.
  const handleUpdatedTicket = async (data: ITicketInput) => {
    onSubmitForm({...initialForm, ...data})
  }
  return (
    <TicketModel visible={showModal} onCancel={onCancelForm}>
      <TicketForm title='Update ticket' action='Update' onSubmitForm={handleUpdatedTicket} onCancelForm={onCancelForm} showModal={showModal} initialForm={initialForm} />
    </TicketModel>
  )
}

export default UpdateTicket
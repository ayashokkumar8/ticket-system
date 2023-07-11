// import core
import {ReactElement, FC } from 'react'
// Import custom
import TicketForm from '../components/TicketForm';
import TicketModel from './TicketModel';
import { ITicketInput, ITicketResponse } from '../utils/interface';

// props for create new ticket component.
type Props = {
    onSubmitForm: (formData: ITicketInput) => Promise<any>;
    onCancelForm: () => void;
    initialForm: Partial<ITicketResponse>;
    showModal: boolean;
};

const AddTicket: FC<Props> = ({ onSubmitForm, onCancelForm, initialForm, showModal}: Props): ReactElement => {

  return (
    <TicketModel visible={showModal} onCancel={onCancelForm}>
    <TicketForm title='Create new ticket' action='Submit' onSubmitForm={onSubmitForm} onCancelForm={onCancelForm} showModal={showModal} initialForm={initialForm}/>
    </TicketModel>

  )
}

export default AddTicket
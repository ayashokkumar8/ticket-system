// Import core
import { useEffect, ReactElement, FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
// Import third party
import { Box, Typography, Button } from '@mui/material';
import { object, string, TypeOf } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
// Import custom
import { StyledForm, StyledInput, StyledTextarea, StyledSelect, StyledLabel, StyledFormError } from '../styles/TicketsForm';
import { ITicketInput, ITicketResponse } from '../utils/interface';
import { StyledTicketButtonContainer } from '../styles/TicketsContainer';

// form schema for validate when click on submit button
const ticketSchema = object({
    client: string()
        .nonempty('Clien name is required')
        .max(8, 'Client name must be less than 8 characters'),
    status: string().nonempty('Password is required'),
    issue: string().nonempty('Description is required').max(120, 'Description must be less than 120 characters'),
    deadline: string().refine((data) => new Date(data) > new Date(), { message: "Start date must be in the future" }),
})

// type of ticket schema.
type TicketCreateInput = TypeOf<typeof ticketSchema>;

// props for reusable ticket form.
type Props = {
    onSubmitForm: (formData: ITicketInput) => Promise<any>;
    onCancelForm: () => void;
    initialForm: Partial<ITicketResponse>;
    showModal: boolean;
    title: string;
    action: string
};

// main function of reusable ticket form.
const TicketForm: FC<Props> = ({ onSubmitForm, onCancelForm, initialForm, showModal, title, action }: Props): ReactElement => {
    const today = dayjs().format('YYYY-MM-DD');
    // const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

    // attach validation functions for useForm to verify and pass data.
    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
    } = useForm<TicketCreateInput>({
        resolver: zodResolver(ticketSchema),
        defaultValues: initialForm,
    });

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitSuccessful]);

    // click on submit fire action for formsubmit.
    const onSubmitHandler: SubmitHandler<TicketCreateInput> = (values) => {
        console.log(values);
        const updateFormData = {
            ...values,
            deadline: (dayjs(values.deadline).format('MM/DD/YYYY'))
        }
        onSubmitForm(updateFormData)
    };

    // clicl on cacel button close the modal.
    const handleCancel = () => {
        onCancelForm();
    }

    return (
        <Box sx={{ maxWidth: '30rem' }}>
            <Typography variant='h4' component='h1' sx={{ mb: '2rem' }}>
                {title}
            </Typography>
            <StyledForm onSubmit={handleSubmit(onSubmitHandler)}>
                <div>
                    <StyledLabel htmlFor="client">Username</StyledLabel>
                    <StyledInput id="client" {...register('client')} />
                    {errors?.client?.message && <StyledFormError>{errors.client.message}</StyledFormError>}
                </div>
                <div>
                    <StyledLabel htmlFor="status">Status</StyledLabel>
                    <StyledSelect  id="status" {...register('status')}>
                    <option value="opened">Opened</option>
                    <option value="closed">Closed</option>
                    </StyledSelect>
                    {errors?.status?.message && <StyledFormError>{errors.status.message}</StyledFormError>}
                </div>
                <div>
                    <StyledLabel htmlFor="issue">Issue</StyledLabel>
                    <StyledTextarea id="issue" {...register('issue')} />
                    {errors?.issue?.message && <StyledFormError>{errors.issue.message}</StyledFormError>}
                </div>
                <div>
                    <StyledLabel htmlFor="deadline">Deadline</StyledLabel>
                    <StyledInput id="deadline" type="date" min={today} {...register('deadline')} />
                    {errors?.deadline?.message && (
                        <StyledFormError>{errors.deadline.message}</StyledFormError>
                    )}
                </div>
                <StyledTicketButtonContainer>
                <Button variant="contained" size="medium" style={{marginRight: '10px'}} onClick={handleCancel}>Cancel</Button>
                <Button  variant="contained" size="medium"type="submit">{action}</Button>
                </StyledTicketButtonContainer>
            </StyledForm>
        </Box>
    );
};

export default TicketForm;


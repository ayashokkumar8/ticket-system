// import core
import { FC, ReactElement } from "react";
// import cthird party
import { Modal, Fade, Box } from "@mui/material";

// props for reusable modal component.
interface Props {
    visible?: any;
    children: any;
    onCancel?: any;
}

// style for modal box
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// reusable modal component.
const TicketModel: FC<Props> = ({
    children,
    visible,
    onCancel,
}: Props): ReactElement => {
    return (
        <>
            <Modal
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                open={visible}
                onClose={onCancel}
            >
                <Fade in={visible}>
                    <Box sx={style}>
                        {children}
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default TicketModel
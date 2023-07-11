// Import third parts.
import { Typography, Card, Switch, Radio } from '@mui/material';
import { styled } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';

// styles for card component elements.
export const StyledTicketCardIssue = styled(Typography)`
min-height: 50px;
background: #fff;
padding: 10px;
text-align: left;
margin: 0px;
border-radius: 15px;
cursor: pointer;
`
export const StyledTicketCardText = styled(Typography)`
font-weight: bold;
`

export const StyledTicketCard = styled(Card)`
background-color: #c8dce8;
margin: 10px;
border-radius: 15px;
`
export const StyledTicketRadio = styled(Radio)(({ theme, name }) => ({
    '& .MuiRadio-root.Mui-checked': {
        color: green[600],
    },
}));


export const StyledTicketSwitch = styled((Switch))(({ theme }) => ({
    width: 42,
    height: 26,
    marginTop: 5,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: grey[600],
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
                color: grey[600],
            },
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? grey[400] : grey[400],
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        width: 22,
        height: 22,
        color: green[600],
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === 'light' ? green[300] : green[600],
        opacity: 1,
        transition: theme.transitions.create(['background-color'], {
            duration: 500,
        }),
    },
}));

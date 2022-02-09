import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

export const BoxStyled = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"

});

export const TextFieldStyled = styled(TextField)({
    width: "80%",
    marginTop: 15,
    marginBottom: 15,
    color: 'white',
    borderRadius: "10px 0 0 10px",
    
    background: "rgba(0, 0, 0, 0.5)",
    "fieldset": {
        borderRadius: "10px 0 0 10px",
        borderWidth: 1,
        borderColor: "white",
        color: "white",        
    },
    "input": {
        color: "white",
        fontWeight: 300,
    },
    "label": {
        color: "white"        
    },
    "& label.Mui-focused": {
        color: "white"
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "white"
        }
    },
    "& .MuiOutlinedInput-root:hover": {
        "fieldset": {
            borderColor: "white"
        }
    }
});

export const ButtonStyled = styled(Button)({
    background: "rgba(0, 0, 0, 0.7)",
    height: 56,
    boxShadow: "none",
    border: "1px solid white",
    borderRadius: "0 10px 10px 0",
    "&:hover": {
        background: "rgba(0, 0, 0, 0.85)",
        boxShadow: "none",    
    }
});
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { getIconTypePokemon } from "../../helpers/functions";
import { styled } from '@mui/system';

export const ContainerCardPokemon = styled(Box)({
    position: "relative"
});

export const CardStyled = styled(Card)({
    display: "flex",
    borderRadius: "5em .5em .5em 5em",
    background: "linear-gradient(90deg, rgba(0, 0, 0, .6) 0%, rgba(0, 0, 0, .5) 50%, rgba(0, 0, 0, 0) 100%)",
    boxShadow: "none",
    position: "relative",
    transition: "background 100ms linear",
    "&:hover": {
        cursor: "pointer",
        background: "#EFEBD1",
        ".MuiTypography-root": {
            color: "#27384E",
            fontWeight: 400
        },
        ".pokeball": {
            display: "flex"
        }
    },
    
});

export const TagNumber = styled(Box)({
    clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
    background: "rgba(255, 255, 255, .8)",
    color: "white",
    fontWeight: 300,
    fontSize: 13,
    height: 27,
    width: 73,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
        background: "rgba(0, 0, 0, .8)",
        color: "white",
        height: 25,
        width: 70,
        zIndex: -1
    }
});

export const IconType = styled(Box)(({ tipo }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    background: getIconTypePokemon(tipo),
    borderRadius: ".3em 0 0 .3em"
}));

export const TextType = styled(Box)({
    background: "rgba(0, 0, 0, .8)",
    borderRadius: "0 .3em .3em 0",
    marginRight: 1,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 13,
    fontWeight: 300,
    color: "white",
});

export const EvolvesFrom = styled(Box)({
    cursor: "pointer",
    position: "absolute",
    zIndex: 1,
    bottom: 0,
    left: -20,
    padding: 6,
    background: "rgba(0, 0, 0, 0.5)",
    borderRadius: 50
});
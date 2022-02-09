import Box from '@mui/material/Box';
import { getIconTypePokemon } from "../../helpers/functions";
import { styled } from '@mui/system';

export const TitleStyled = styled(Box)(({ width, height, background }) => ({
    clipPath: "polygon(0% 0%, 92% 0%, 95% 1%, 97% 2%, 100% 4%, 100% 6%, 99% 6%, 97% 8%, 99% 9%, 99% 11%, 98% 12%, 97% 14%, 96% 15%, 98% 17%, 99% 19%, 98% 21%, 96% 24%, 96% 25%, 98% 27%, 99% 30%, 97% 31%, 96% 33%, 97% 35%, 98% 37%, 95% 40%, 98% 42%, 99% 42%, 96% 46%, 98% 47%, 99% 48%, 96% 50%, 95% 53%, 99% 56%, 99% 57%, 97% 63%, 96% 64%, 98% 67%, 98% 70%, 96% 72%, 97% 75%, 99% 77%, 97% 79%, 96% 83%, 98% 85%, 99% 86%, 97% 88%, 98% 90%, 98% 92%, 99% 95%, 98% 96%, 97% 97%, 98% 100%, 11% 100%, 9% 99%, 6% 99%, 4% 98%, 1% 98%, 1% 98%, 5% 96%, 7% 95%, 4% 94%, 2% 93%, 2% 92%, 5% 90%, 3% 89%, 4% 87%, 5% 86%, 4% 85%, 3% 84%, 4% 82%, 3% 81%, 3% 79%, 4% 78%, 4% 76%, 3% 75%, 5% 72%, 6% 72%, 5% 71%, 4% 69%, 3% 67%, 5% 66%, 6% 64%, 4% 62%, 3% 60%, 4% 57%, 5% 55%, 5% 54%, 4% 52%, 3% 50%, 4% 49%, 4% 48%, 3% 43%, 4% 41%, 5% 39%, 4% 35%, 3% 34%, 4% 32%, 5% 31%, 4% 29%, 3% 27%, 3% 26%, 4% 24%, 4% 22%, 4% 21%, 4% 20%, 4% 17%, 3% 17%, 3% 15%, 4% 13%, 4% 12%, 3% 9%, 4% 6%, 2% 4%, 1% 1%)",
    background: background ? background : "#27384E",
    width: width ? width : "100%",
    height: height ? height : 60,
    paddingLeft: 60,
    paddingRight: 80,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}));

export const TagNumber = styled(Box)({
    clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
    background: "rgba(255, 255, 255, .8)",
    color: "white",
    fontWeight: 300,
    fontSize: 13,
    height: 27,
    width: 103,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginRight: 10,
    "&::before": {
        content: '""',
        position: "absolute",
        clipPath: "polygon(15% 0%, 85% 0%, 100% 50%, 85% 100%, 15% 100%, 0% 50%)",
        background: "#13243a",
        color: "white",
        height: 25,
        width: 100,
        zIndex: -1
    }
});

export const IconType = styled(Box)(({ tipo }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    background: getIconTypePokemon(tipo),
    borderRadius: ".3em 0 0 .3em"
}));

export const TextType = styled(Box)({
    display: "flex",
    alignItems: "center",
    background: "rgba(0, 0, 0, .8)",
    borderRadius: "0 .3em .3em 0",
    marginRight: 1,
    paddingLeft: 10,
    paddingRight: 10,
    height: 25,
    fontSize: 13,
    fontWeight: 300,
    color: "white",
});

export const ImageCard = styled(Box)(({ width, height }) => ({
    display: "flex",
    width: width,
    height: height,
    background: "whitesmoke",
    borderRadius: 3,
    boxShadow: "0px .5px 2px 2px rgba(0, 0, 0, .1)",
    alignItems: "center",
    justifyContent: "center"
}));

export const BackgroundImage = styled(Box)(({ width, height }) => ({
    display: "flex",
    width: width,
    height: height,
    background: "radial-gradient(#e1e0d7, #a6a59c)",
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
}));

export const AbilityCard = styled(Box)(({
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 1px 1px 1px rgba(0, 0, 0, 0.1)",
    background: "#ECE7CD",
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    borderRadius: 5,
    "div": {
        paddingLeft: 20,
        display: "flex",
        alignItems: "center",
        height: 60,
        borderRadius: 5,
        border: "2px dashed #d6c99a",
        width: "100%",
    }

}));
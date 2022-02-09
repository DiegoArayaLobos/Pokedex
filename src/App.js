import ListPokemon from "./components/ListPokemon";
import background from "./assets/img/background.jpg";
import { styled } from "@mui/system";

const Background = styled("div")({
    position: "fixed",
    top: -50,
    left: -50,
    zIndex: -1,
    zoom: "110%",
    width: "100vw",
    height: "100vh",
    filter: "blur(40px)",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    
});

const App = () => {
    return (
        <>
            <Background />
            <ListPokemon />
        </>
    );
}

export default App;

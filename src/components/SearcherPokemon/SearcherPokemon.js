import { useState, useEffect } from "react";
import { BoxStyled, TextFieldStyled, ButtonStyled } from "./SearcherPokemonStyled"; //Componentes de MUI estilizados

const SearcherPokemon = (props) => {
    const {
        urlSearch,
        handleUrlSearch
    } = props;
    const [inputValue, setInputValue] = useState("");

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleOnClick = () => {
        urlSearch !== `https://pokeapi.co/api/v2/pokemon/${inputValue}` && inputValue !== "" && handleUrlSearch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`);
    }

    const handleOnEnter = (e) => {
        e.key === 'Enter' && inputValue !== "" && handleUrlSearch(`https://pokeapi.co/api/v2/pokemon/${inputValue.toLowerCase()}`);
    }
    
    //Efecto para resetear la url por defecto luego de vaciar el input

    useEffect(() => {
        urlSearch !== "https://pokeapi.co/api/v2/pokemon?limit=25" && inputValue === "" && handleUrlSearch("https://pokeapi.co/api/v2/pokemon?limit=25");
    }, [inputValue, handleUrlSearch, urlSearch])

    return (
        <>  
            <BoxStyled>
                <TextFieldStyled id="input" label="Pokemon Name" variant="outlined" onChange={handleInputValue} onKeyDown={handleOnEnter} />
                <ButtonStyled variant="contained" onClick={handleOnClick}>Search</ButtonStyled>
            </BoxStyled>
        </>
    );
}
 
export default SearcherPokemon;
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Pokeball from "../../assets/svg/Pokeball";
import { useState, useEffect } from "react";
import { getUrlTypePokemon, capitalize } from '../../helpers/functions';
import { ContainerCardPokemon, CardStyled, TagNumber, IconType, TextType, EvolvesFrom } from "./CardPokemonStyled"; //Componentes de MUI estilizados

const CardPokemon = (props) => {
    const {
        pokemon,
        handleOpen,
        handlePokemonSelected
    } = props;

    const [start, setStart] = useState(true);
    const [data, setData] = useState(null);
    const [evolvesFrom, setEvolvesFrom] = useState(null);
    const [idEvolvesFrom, setIdEvolvesFrom] = useState(null);
    const [pokemonEvolvesFrom, setPokemonEvolvesFrom] = useState(null);

    const handleSelectPokemon = (dataPokemon) => {
        handleOpen();
        handlePokemonSelected(dataPokemon);
    }
    //Obtención de los datos del pokémon proveniente de la lista de pokemones
    useEffect(() => {
        start && pokemon.dataToSearch && fetch(pokemon.url)
        .then((response) => response.json())
        .then((json) => {
            setStart(false);
            setData(json);
        })
        .catch((err) => {});
    }, [start, pokemon.dataToSearch, pokemon.url]);

    //Seteo de los datos del pokémon proveniente de una busqueda única
    useEffect(() => {
        !pokemon.dataToSearch && setData(pokemon.data);
    }, [pokemon])

    //Obtención de la especie del pokémon
    useEffect(() => {
        data !== null && data !== undefined && fetch(`https://pokeapi.co/api/v2/pokemon-species/${data.id}/`)
        .then((response) => response.json())
        .then((json) => {
            setEvolvesFrom(json.evolves_from_species);
        })
        .catch((err) => {});

        return () => {
            setEvolvesFrom(null);
        }
    }, [data]);

    //Obtención del id del pekémon
    useEffect(() => {
        evolvesFrom !== null && fetch(evolvesFrom.url)
        .then((response) => response.json())
        .then((json) => {
            setIdEvolvesFrom(json.id);
        })
        .catch((err) => {});
    }, [evolvesFrom]);

    //Obtención del pokémon anterior a la evolución
    useEffect(() => {
        idEvolvesFrom !== null && fetch(`https://pokeapi.co/api/v2/pokemon/${idEvolvesFrom}`)
        .then((response) => response.json())
        .then((json) => {
            setPokemonEvolvesFrom(json);
        })
        .catch((err) => {});
    }, [idEvolvesFrom]);

    return (
        data !== null && data !== undefined && <ContainerCardPokemon>
            <CardStyled onClick={() => handleSelectPokemon(data)}>
                <Box sx={{ display: "flex", alignItems: "center", paddingLeft: 1, paddingTop: .5, paddingBottom: .5 }}>
                    <CardMedia
                        component="img"
                        image={data.sprites.other["official-artwork"]["front_default"]}
                        sx={{ 
                            borderRadius: 50, 
                            width: 134, 
                            height: 134, 
                            background: "linear-gradient(90deg, #fffbe1 0%, #f5f1d7 100%)", 
                            border: "2px solid rgba(0, 0, 0, 0.8)" 
                        }}
                    />
                    <CardContent>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            <TagNumber>
                                {
                                    `No. ${data.game_indices[data.game_indices.length-1].game_index}`
                                }
                            </TagNumber>
                            <Typography variant="h5" sx={{ 
                                color: "white", 
                                paddingTop: 1.3, 
                                paddingBottom: 1.3, 
                                fontWeight: 300,
                                
                                "&.MuiCard-root:hover": {
                                    color: "black"
                                }

                                }}>
                                {
                                    capitalize(data.name)
                                }
                            </Typography>
                            <Box sx={{ display: "flex" }}>
                                {
                                    data.types.map((tipo, index) => {
                                        return <Box key={`Tipo-${pokemon.name}-${index}`} sx={{ display: "flex", height: 20, pr: 1 }}>
                                            <IconType tipo={tipo.type.name}>
                                                {
                                                    getUrlTypePokemon(tipo.type.name)
                                                }
                                            </IconType>
                                            <TextType>
                                                {
                                                    tipo.type.name.toUpperCase()
                                                }
                                            </TextType>
                                        </Box>
                                    })
                                }
                            </Box>
                        </Box>
                    </CardContent>
                </Box>
                <Box className="pokeball" sx={{
                    display: "none",
                    position: "absolute",
                    alignItems: "center",
                    right: 25,
                    height: "100%"
                }}>
                    <Pokeball />
                </Box>
            </CardStyled>
            {
                pokemonEvolvesFrom !== null && <EvolvesFrom onClick={() =>handleSelectPokemon(pokemonEvolvesFrom)}>
                    <CardMedia
                        component="img"
                        image={pokemonEvolvesFrom.sprites.other["official-artwork"]["front_default"]}
                        alt="green iguana"
                        sx={{ borderRadius: 50, width: 64, height: 64, p: .7, background: "white" }}
                    />
                </EvolvesFrom>
            }
        </ContainerCardPokemon>
    );
}

export default CardPokemon;
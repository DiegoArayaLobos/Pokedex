import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import PokeballSpinner from "../../assets/svg/PokeballSpinner";
import SearcherPokemon from "../SearcherPokemon";
import CardPokemon from "../CardPokemon/CardPokemon";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ModalPokemon from "../ModalPokemon";

const ListaPokemones = () => {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState(null);
    const [urlSearch, setUrlSearch] = useState("https://pokeapi.co/api/v2/pokemon?limit=25");
    const [pokemonSelected, setPokemonSelected] = useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleUrlSearch = (url) => setUrlSearch(url);

    const handlePokemonSelected = (pokemon) => setPokemonSelected(pokemon);

    useEffect(() => {
        setTimeout(() => fetch(urlSearch)
            .then((response) => response.json())
            .then((json) => {
                setData(json);
            })
            .catch((err) => {})
            , 500)
    }, [urlSearch]);

    return (
        <>
            <Container maxWidth="lg">
                <SearcherPokemon
                    urlSearch={urlSearch}
                    handleUrlSearch={handleUrlSearch}
                />
                <Grid container spacing={4}>
                    {
                        //Previsualización de un spinner de carga
                        data !== null ? (
                            //Visualización de lista de pokemones
                            urlSearch === "https://pokeapi.co/api/v2/pokemon?limit=25" && data.results !== undefined ? (
                                data.results.map((pokemon, index) => {
                                    return <Grid key={`Pokemon-${index}`} item lg={6} sm={12}>
                                        <CardPokemon
                                            pokemon={{ ...pokemon, dataToSearch: true }}
                                            handleOpen={handleOpen}
                                            handlePokemonSelected={handlePokemonSelected}
                                        />
                                    </Grid>
                                })
                            ) : (
                                //Visualización de la busqueda de un pokémon
                                data.results === undefined && <Grid item lg={6} sm={12}>
                                    <CardPokemon
                                        pokemon={{ data, dataToSearch: false }}
                                        handleOpen={handleOpen}
                                        handlePokemonSelected={handlePokemonSelected}
                                    />
                                </Grid>
                            )
                        ) : (
                            <Box sx={{
                                width: "100%",
                                height: "85vh",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <PokeballSpinner />
                            </Box>
                        )
                    }
                </Grid>
            </Container>
            <ModalPokemon
                open={open}
                pokemonSelected={pokemonSelected}
                handleClose={handleClose}
            />
        </>
    );
}

export default ListaPokemones;
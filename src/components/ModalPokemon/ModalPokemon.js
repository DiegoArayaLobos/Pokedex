import Modal from '@mui/material/Modal';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PokeballMarcaDeAgua from "../../assets/svg/PokeballMarcaDeAgua";
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PokeballSpinner from '../../assets/svg/PokeballSpinner';
import { useState, useEffect } from "react";
import { getUrlTypePokemon, capitalize } from '../../helpers/functions';
import { TitleStyled, TagNumber, IconType, TextType, ImageCard, BackgroundImage, AbilityCard } from "./ModalPokemonStyled"; //Componentes de MUI estilizados

const ModalPokemon = (props) => {
    const {
        open,
        pokemonSelected,
        handleClose
    } = props;

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        height: 700,
        bgcolor: '#ECE7CD',
        boxShadow: 14,
        p: 4,
        borderRadius: 2
    };

    const [specie, setSpecie] = useState(null);
    const [familyTree, setFamilyTree] = useState(null);
    const [firstSpeciePokemon, setFirstSpeciePokemon] = useState(null);
    const [secondSpeciePokemon, setSecondSpeciePokemon] = useState(null);
    const [thirdSpeciePokemon, setThirdSpeciePokemon] = useState(null);
    const [firstPokemon, setFirstPokemon] = useState(null);
    const [secondPokemon, setSecondPokemon] = useState(null);
    const [thirdPokemon, setThinrdPokemon] = useState(null);

    const handleCloseModal = () => {
        handleClose();
    }

    const getAPI = (url, setState) => {
        Object.keys(pokemonSelected).length !== 0 && fetch(url)
        .then((response) => response.json())
        .then((json) => {
            setState(json);
        })
        .catch((err) => {});
    }

    //Limpieza de estados al cambiar el pokémon seleccionado
    useEffect(() => {
        setSpecie(null);
        setFamilyTree(null);
        setFirstSpeciePokemon(null);
        setSecondSpeciePokemon(null);
        setThirdSpeciePokemon(null);
        setFirstPokemon(null);
        setSecondPokemon(null);
        setThinrdPokemon(null);
    }, [pokemonSelected])

    //Obtención de json con arból evolutivo y sus respectivas imagenes

    //Obtención de la especie del pokemon
    useEffect(() => {
        Object.keys(pokemonSelected).length !== 0 && getAPI(`https://pokeapi.co/api/v2/pokemon-species/${pokemonSelected.id}/`, setSpecie)
    }, [pokemonSelected]);

    //Obtención del arból evolutivo
    useEffect(() => {
        specie !== null && fetch(specie.evolution_chain.url)
        .then((response) => response.json())
        .then((json) => {
            setFamilyTree(json);
        })
        .catch((err) => {});
    }, [specie]);

    //Obtención de la especie primer pokémon en el arból evolutivo
    useEffect(() => {
        familyTree !== null && firstSpeciePokemon === null && getAPI(familyTree.chain.species.url, setFirstSpeciePokemon);
    }, [familyTree]);
    
    //Obtención de los datos del primer pokémon en el arból evolutivo
    useEffect(() => {
        firstSpeciePokemon !== null && firstPokemon === null && getAPI(`https://pokeapi.co/api/v2/pokemon/${firstSpeciePokemon.id}/`, setFirstPokemon);
    }, [firstSpeciePokemon]);
    
    //Obtención de la especie segundo pokémon en el arból evolutivo
    useEffect(() => {
        familyTree !== null && familyTree.chain.evolves_to.length > 0 && secondSpeciePokemon === null && getAPI(familyTree.chain.evolves_to[0].species.url, setSecondSpeciePokemon);
    }, [familyTree]);
    
    //Obtención de los datos del segundo pokémon en el arból evolutivo
    useEffect(() => {
        secondSpeciePokemon !== null && secondPokemon === null && getAPI(`https://pokeapi.co/api/v2/pokemon/${secondSpeciePokemon.id}/`, setSecondPokemon);
    }, [secondSpeciePokemon]);

    //Obtención de la especie tercer pokémon en el arból evolutivo
    useEffect(() => {
        familyTree !== null && familyTree.chain.evolves_to.length > 0 && familyTree.chain.evolves_to[0].evolves_to.length > 0 && thirdSpeciePokemon === null && getAPI(familyTree.chain.evolves_to[0].evolves_to[0].species.url, setThirdSpeciePokemon);
    }, [familyTree]);
    
    //Obtención de los datos del tercer pokémon en el arból evolutivo
    useEffect(() => {
        thirdSpeciePokemon !== null && thirdPokemon === null && getAPI(`https://pokeapi.co/api/v2/pokemon/${thirdSpeciePokemon.id}/`, setThinrdPokemon);
    }, [thirdSpeciePokemon]);

    return (
        Object.keys(pokemonSelected).length !== 0 && <Modal
            open={open}
            onClose={handleCloseModal}
        >
            <Box sx={style}>
                <Box sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "rotate(30deg)",
                    zIndex: -1
                }}>
                    <PokeballMarcaDeAgua />
                </Box>
                <TitleStyled >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <TagNumber>
                            {
                                `No. ${pokemonSelected.game_indices[pokemonSelected.game_indices.length - 1].game_index}`
                            }
                        </TagNumber>
                        <Typography id="modal-modal-title" sx={{
                            fontSize: 33,
                            fontWeight: 300,
                            color: "white"
                        }}>
                            {
                                capitalize(pokemonSelected.name)
                            }
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        {
                            pokemonSelected.types.map((tipo, index) => {
                                return <Box key={`Tipo-${pokemonSelected.name}-${index}`} sx={{ display: "flex", height: 20, pr: 1 }}>
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
                </TitleStyled>
                <Box sx={{ display: "flex", paddingLeft: 6, paddingRight: 10, paddingTop: 5, paddingBottom: 5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <ImageCard width={400} height={400}>
                            <BackgroundImage width={350} height={350}>
                                <CardMedia
                                    component="img"
                                    image={pokemonSelected.sprites.other["official-artwork"]["front_default"]}
                                    alt="green iguana"
                                />
                            </BackgroundImage>
                        </ImageCard>
                        {
                            familyTree !== null && <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", paddingTop: 2 }}>
                                {
                                    firstPokemon !== null && secondPokemon !== null && <ImageCard width={100} height={100}>
                                        <BackgroundImage width={80} height={80}>
                                            <CardMedia
                                                component="img"
                                                image={firstPokemon.sprites.other["official-artwork"]["front_default"]}
                                            />
                                        </BackgroundImage>
                                    </ImageCard>
                                }
                                {
                                    secondPokemon !== null && <>
                                        <ArrowCircleRightIcon sx={{
                                            fontSize: 50,
                                            color: "#4c5a67",
                                        }} />
                                        <ImageCard width={100} height={100}>
                                            <BackgroundImage width={80} height={80}>
                                                <CardMedia
                                                    component="img"
                                                    image={secondPokemon.sprites.other["official-artwork"]["front_default"]}
                                                />
                                            </BackgroundImage>
                                        </ImageCard> 
                                    </>
                                }
                                {
                                    thirdPokemon !== null && <>
                                        <ArrowCircleRightIcon sx={{
                                            fontSize: 50,
                                            color: "#4c5a67",
                                        }} />
                                        <ImageCard width={100} height={100}>
                                            <BackgroundImage width={80} height={80}>
                                                <CardMedia
                                                    component="img"
                                                    image={thirdPokemon.sprites.other["official-artwork"]["front_default"]}
                                                />
                                            </BackgroundImage>
                                        </ImageCard>
                                    </>
                                }
                            </Box>
                        }
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: 10 }}>
                        <Box sx={{ marginBottom: 5, display: "flex", justifyContent: "sapce-between" }}>
                            <Box sx={{ display: "flex", alignItems: "center", width: "50%" }}>
                                <MonitorWeightIcon sx={{
                                    fontSize: 50,
                                    color: "#4c5a67",
                                    marginRight: 2
                                }} />
                                <Typography id="modal-modal-title" sx={{
                                    fontSize: 23,
                                    fontWeight: 300,
                                    color: "#4c5a67"
                                }}>
                                    {
                                        `${pokemonSelected.weight} lbs`
                                    }
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", width: "50%" }}>
                                <SquareFootIcon sx={{
                                    fontSize: 50,
                                    color: "#4c5a67",
                                    marginRight: 2
                                }} />
                                <Typography id="modal-modal-title" sx={{
                                    fontSize: 23,
                                    fontWeight: 300,
                                    color: "#4c5a67"
                                }}>
                                    {
                                        `${pokemonSelected.height}'`
                                    }
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <TitleStyled width={390} height={40} background={"#3b4c62"}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Typography id="modal-modal-title" sx={{
                                        fontSize: 24,
                                        fontWeight: 300,
                                        color: "white"
                                    }}>
                                        Abilities
                                    </Typography>
                                </Box>
                            </TitleStyled>
                        </Box>
                        <Box>
                            {
                                pokemonSelected.abilities.map((ability, index) => {
                                    return <AbilityCard key={`Ability-${pokemonSelected}-${index}`}>
                                        <div>
                                            <Typography id="modal-modal-title" sx={{
                                                fontSize: 21,
                                                color: "#4c5a67"
                                            }}>
                                                {
                                                    capitalize(ability.ability.name)
                                                }
                                            </Typography>
                                        </div>
                                    </AbilityCard>
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Modal>
    );
}

export default ModalPokemon;
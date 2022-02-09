import TipoAgua from "../assets/svg/TipoAgua";
import TipoBicho from "../assets/svg/TipoBicho";
import TipoDragon from "../assets/svg/TipoDragon";
import TipoElectrico from "../assets/svg/TipoElectrico";
import TipoFantasma from "../assets/svg/TipoFantasma";
import TipoFuego from "../assets/svg/TipoFuego";
import TipoHada from "../assets/svg/TipoHada";
import TipoHielo from "../assets/svg/TipoHielo";
import TipoLucha from "../assets/svg/TipoLucha";
import TipoMetal from "../assets/svg/TipoMetal";
import TipoNormal from "../assets/svg/TipoNomal";
import TipoPlanta from "../assets/svg/TipoPlanta";
import TipoPsiquico from "../assets/svg/TipoPsiquico";
import TipoRoca from "../assets/svg/TipoRoca";
import TipoSiniestro from "../assets/svg/TipoSiniestro";
import TipoTierra from "../assets/svg/TipoTierra";
import TipoVeneno from "../assets/svg/TipoVeneno";
import TipoVolador from "../assets/svg/TipoVolador";

export const getIconTypePokemon = (tipo) => {
    switch (tipo) {
        case "water":
            return "#3692dc";
        case "bug":
            return "#83c300";
        case "dragon":
            return "#006fc9";
        case "electric":
            return "#fbd100";
        case "ghost":
            return "#4c6ab2";
        case "fire":
            return "#ff9741";
        case "fairy":
            return "#fb89eb";
        case "ice":
            return "#4cd1c0";
        case "fighting":
            return "#e0306a";
        case "steel":
            return "#5a8ea2";
        case "normal":
            return "#919aa2";
        case "grass":
            return "#38bf4b";
        case "psychic":
            return "#ff6675";
        case "rock":
            return "#c8b686";
        case "dark":
            return "#5b5466";
        case "ground":
            return "#e87236";
        case "poison":
            return "#b567ce";
        case "flying":
            return "#89aae3";
        default:
            break;
    }
};

export const getUrlTypePokemon = (tipo) => {
    switch (tipo) {
        case "water":
            return <TipoAgua />;
        case "bug":
            return <TipoBicho />;
        case "dragon":
            return <TipoDragon />;
        case "electric":
            return <TipoElectrico />;
        case "ghost":
            return <TipoFantasma />;
        case "fire":
            return <TipoFuego />;
        case "fairy":
            return <TipoHada />;
        case "ice":
            return <TipoHielo />;
        case "fighting":
            return <TipoLucha />;
        case "steel":
            return <TipoMetal />;
        case "normal":
            return <TipoNormal />;
        case "grass":
            return <TipoPlanta />;
        case "psychic":
            return <TipoPsiquico />;
        case "rock":
            return <TipoRoca />;
        case "dark":
            return <TipoSiniestro />;
        case "ground":
            return <TipoTierra />;
        case "poison":
            return <TipoVeneno />;
        case "flying":
            return <TipoVolador />;
        default:
            break;
    }
}

export const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

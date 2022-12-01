import "../css/formation.css";
import Divider from "./Divider";

const Formations = () => {
    return (
        <>
            <div id="formation__box">
                <div>
                    <a href="https://lycee-serusier-carhaix.ac-rennes.fr/" aria-label="Lien vers le site du lycee"><img src="./image/Lycee.webp" alt="lycée" loading="lazy" /></a>
                    <h2>Lycée Polyvalent Paul sérusier - Carhaix</h2>
                </div>
                <div>
                    <a href="https://iut-lannion.univ-rennes1.fr/informatique" aria-label="Lien vers le site de l'iut"><img src="./image/facadeIUTLannion.webp" alt="iut" loading="lazy" /></a>
                    <h2>IUT Informatique - Lannion</h2>
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Formations;
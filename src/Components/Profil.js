import Divider from "./Divider";

import "../css/profil.css";

const Profil = () => {
    const age = (new Date().getFullYear() - 2003) + " ans";

    return (
        <>
            <div id="profil__box">
                <div>
                    <h1>Maxime Boujeant</h1>
                    <p className="age">{age}</p>
                    <p>Véhiculé</p>
                    <p>
                        <a href={"mailto:maxime.boujeant@gmail.com"}>maxime.boujeant@gmail.com</a>
                    </p>
                    <p>
                        <a href={"https://github.com/maximefurious"}>github.com/maximefurious</a>
                    </p>
                </div>
                <p>
                    Bonjour, je m'appelle Maxime, je suis un étudiant en informatique à l'iut informatique de Lannion, j'ai <span className="age"></span> et je suis passionné par le développement web depuis l'âge de 14 ans. Dans la vie, j'aime l'adrénaline
                    ainsi que les jeux vidéos et la programmation. Je souhaiterais me spécialiser dans le développement web fullstack et donc pour devenir développeur web fullstack à l'avenir. Je suis quelqu'un de dynamique et je suis toujours à la recherche
                    de nouveaux challenges, ainsi que d'opportunité pour m'améliorer et développer mes compétences dans le développement web.
                </p>
                <div>
                    <a href="../image/CV_Maxime_Boujeant_Alternance.pdf">
                        <img src="../image/logo.webp" alt="CV Maxime Boujeant" title="Cliquez pour voir mon CV !" /> Cliquez pour voir mon CV !
                    </a>
                </div>
            </div>
            <Divider />
        </>


    );
}

export default Profil;
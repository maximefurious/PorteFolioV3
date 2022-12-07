import "../css/projet.css";

const Mentions = () => {
    const handleClick = (e) => {
        if (e.target.classList.contains("close")) {
            const modal = document.getElementById("modalMention");
            modal.style.display = "none";
        }
    }

    return (
        <>
            <div id="modalMention" className="modal">
                <div className="modals-content">
                    <header className="close-container">
                        <h2>Mentions</h2>
                        <span className="close" onClick={handleClick}>&times;</span>
                    </header>
                    <div className="modal-main">
                        <h1 className="titre">Mentions légales</h1>
                        <h3 className="titre">En vigueur au 29/09/2022</h3>
                        <p>
                            Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l""Utilisateur", du site https://www.maximeboujeant.fr/,
                            ci-après le "Site", les présentes mentions légales.
                        </p>
                        <p>
                            La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
                        </p>
                        <p>
                            Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
                        </p>

                        <h1>ARTICLE 1 - L'EDITEUR</h1>
                        <p>
                            L’édition et la direction de la publication du Site est assurée par Boujeant Maxime, dont le numéro de téléphone est 0616903429, et l'adresse e-mail maxime.boujeant@gmail.com.
                        </p>
                        <p>
                            ci-après l'"Editeur".
                        </p>

                        <h1>ARTICLE 2 - L'HEBERGEUR</h1>
                        <p>
                            L'hébergeur du Site est la société Hostinger international ltd, dont le siège social est situé au 61 Lordou Vironos Street, 6023 Larnaca, Chypre.
                        </p>
                        <h1>ARTICLE 3 - ACCES AU SITE</h1>
                        <p>
                            Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
                        </p>
                        <p>
                            En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
                        </p>

                        <h1>ARTICLE 4 - COLLECTE DES DONNEES</h1>

                        <p>
                            Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs
                        </p>
                        <p>
                            Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la
                            propriété intellectuelle et le Code civil.
                        </p>

                        <p>
                            Rédigé sur http://legalplace.fr
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mentions;
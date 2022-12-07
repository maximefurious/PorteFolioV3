import "../css/footer.css";


const Footer = ({ showMention}) => {

    const handleSubmit = (e) => {
        // get the form data out of state
        e.preventDefault();
        const data = new FormData(e.target);
        const object = {};
        data.forEach((value, key) => { object[key] = value });
        const json = JSON.stringify(object);
        console.log(json);
    }

    return (
        <>
            <footer id="CONTACT">
                <div className="footer__container">
                    <div className="footer__box notSelect">
                        <div id="info">
                            <h1>Maxime BOUJEANT</h1>
                            <a href="mailto:maxime.boujeant@gmail.com">maxime.boujeant@gmail.com</a>
                            <hr />
                            <div className="social">
                                <a href="https://www.linkedin.com/in/maxime-boujeant-88377a215/" aria-label="linkedin"><img src="./image/social/linkedin.svg" alt="linkedin" /></a>
                                <a href="https://github.com/maximefurious" aria-label="github"><img src="./image/social/github.svg" alt="github" /></a>
                                <a href="https://www.instagram.com/maximeboujeant/" aria-label="instagram"><img src="./image/social/instagram.svg" alt="instgram" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__box notSelect">
                        <div id="links">
                            <h1>Liens</h1>
                            <ul>
                                <li><a href="#TOP">Accueil</a></li>
                                <li><a href="#skills__box">Compétences</a></li>
                                <li><a href="#CONTACT">Contact</a></li>
                                <li><a href="#profil__box">À propos</a></li>
                                <li onClick={() => showMention(true)}>Mentions légales</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__box">
                        <div id="contact__form__box">
                            <h1>Contact</h1>
                            <form action="./mail.php" method="POST">
                                <input aria-label="email" type="email" name="email" id="email" placeholder="Email" required />
                                <textarea aria-label="message" name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>

                                <input type="submit" value="Envoyer" />
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer__container__text notSelect">
                <p onClick={() => showMention(true)}>
                    © 2022 - <span>{new Date().getFullYear()}</span> - Maxime BOUJEANT
                </p>
            </div>
        </>
    );
};

export default Footer;

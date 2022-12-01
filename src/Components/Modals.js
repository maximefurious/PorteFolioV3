import { useCallback, useEffect } from "react";
import "../css/projet.css";

const Modals = (props) => {
    const data = props.props;

    const makeProjectStep = useCallback(() => {
        const step = document.getElementById("step");
        if (step.innerHTML !== "") {
            step.innerHTML = "";
        }
        for (const element of data.projectStep) {
            const stepItem = document.createElement("li");
            stepItem.innerHTML = element;
            step.appendChild(stepItem);
        }
    }, [data.projectStep]);

    const makeLanguage = useCallback(() => {
        const languages = document.getElementById("language");

        if (languages.innerHTML !== "") {
            languages.innerHTML = "";
        }
        for (const language of data.projectLanguage) {
            const languageItem = document.createElement("li");
            languageItem.innerHTML = language;
            languages.appendChild(languageItem);
        }
    }, [data.projectLanguage]);

    const handleClick = (e) => {
        if (e.target.classList.contains("close")) {
            const modal = document.getElementById("modal");
            modal.style.display = "none";
        }
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            const modal = document.getElementById("modal")
            modal.style.display = "none"
        }
    })

    document.addEventListener("click", (event) => {
        const modal = document.getElementById("modal")
        if (event.target === modal) {
            modal.style.display = "none"
        }
    })



    useEffect(() => {
        makeProjectStep();
        makeLanguage();
    }, [makeProjectStep, makeLanguage]);


    return (
        <div className="modals-content">
            <header className="close-container">
                <h2>{data.projectName}</h2>
                <span className="close" onClick={handleClick}>&times;</span>
            </header>
            <p>
                {data.description}
            </p>
            <ul id="step"></ul>
            <a id="github" href={data.projectGithub} rel="noreferrer">Voir sur Github</a>
            <div>
                <ul id="language"></ul>
            </div>
        </div>
    );
}

export default Modals;
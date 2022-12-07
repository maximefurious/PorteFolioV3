import { useCallback, useEffect, useState } from "react";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Formations from "./Components/Formations";
import Header from "./Components/Header";
import Interet from "./Components/Interet";
import Mentions from "./Components/Mention";
import Profil from "./Components/Profil";
import Projets from "./Components/Projets";
import Skills from "./Components/Skills";

import "./css/app.css";
import "./css/experience.css"
import "./css/loader.css";

function App() {
  // stats for data
  const [projets, setProjets] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [isMention, setIsMention] = useState(false);

  // stats for loading and error for data
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = useCallback(async () => {
    try {
      const dataProjects = await fetch('./data/projets.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const dataSkills = await fetch('./data/skills.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const dataExperience = await fetch('./data/experience.json', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      const dataProjectsResponse = await dataProjects.json();
      const dataSkillsResponse = await dataSkills.json();
      const dataExperienceResponse = await dataExperience.json();

      setIsLoading(false);

      if (dataProjects.ok && dataSkills.ok && dataExperience.ok) {
        setProjets(dataProjectsResponse);
        setSkills(dataSkillsResponse);
        setExperience(dataExperienceResponse);
      } else {
        setError({
          status: 500,
          message: "Une erreur est survenue lors du chargement des données"
        });
      }
    } catch (err) {
      console.log(error);
    }
  }, [error]);

  useEffect(() => {
    if (isLoading) {
      getData();
    }
  }, [isLoading, getData]);

  const showMention = (bool) => {
    setIsMention(bool);
    const modal = document.getElementById("modalMention");
    // if modal is null wait 1s and try again
    if (modal === null) {
      setTimeout(() => {
        showMention(bool);
      }, 1000);
    } else {
      modal.style.display = bool ? "flex" : "none";
    }
  };


  return (
    <div className="container__all">
      {isLoading && (
        <div className="loader_container">
          <div className="loading">
            <div className="arc"></div>
            <div className="arc"></div>
            <div className="arc"></div>
          </div>
        </div>
      )}
      {!isLoading && (
        <>
          <Header />
          <Profil />
          <Interet />
          <Projets props={projets} />
          <Formations />
          <Experience props={experience} />
          <Skills props={skills} />
          {isMention && <Mentions showMention={showMention}/>}
          <Footer showMention={showMention}/>
        </>
      )}
    </div>
  );
}

export default App;

import "../css/skills.css";

const Skills = (props) => {
    const data = props.props;

    const makeWebSkills = () => {
        const skills = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (data[i].type === "Web") {
                skills.push(
                    <div className="skillFigure" key={i} >
                        <em className={data[i].class} ></em>
                        <span>{data[i].name}</span>
                    </div>
                );
            }
        }
        return skills;
    };

    const makeBDDSkills = () => {
        const skills = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (data[i].type === "BDD") {
                skills.push(
                    <div className="skillFigure" key={i} >
                        <em className={data[i].class} ></em>
                        <span>{data[i].name}</span>
                    </div>
                );
            }
        }
        return skills;
    };

    const makeSmartphoneSkills = () => {
        const skills = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (data[i].type === "Smartphone") {
                skills.push(
                    <div className="skillFigure" key={i} >
                        <em className={data[i].class} ></em>
                        <span>{data[i].name}</span>
                    </div>
                );
            }
        }
        return skills;
    };

    const makeOtherSkills = () => {
        const skills = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (data[i].type === "Autres") {
                skills.push(
                    <div className="skillFigure" key={i} >
                        <em className={data[i].class} ></em>
                        <span>{data[i].name}</span>
                    </div>
                );
            }
        }
        return skills;
    };

    const makeIDESkills = () => {
        const skills = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            if (data[i].type === "IDE") {
                skills.push(
                    <div className="skillFigure" key={i} >
                        <em className={data[i].class} ></em>
                        <span>{data[i].name}</span>
                    </div>
                );
            }
        }
        return skills;
    };
    return (
        <>
            <h1>Skills</h1>
            <div id="skills__box">
                <div>
                    <h2>Web</h2>
                    <div className="skills_container">{makeWebSkills()}</div>
                </div>
                <div>
                    <h2>Base de Données</h2>
                    <div className="skills_container">{makeBDDSkills()}</div>
                </div>

                <div>
                    <h2>Smartphone</h2>
                    <div className="skills_container">{makeSmartphoneSkills()}</div>
                </div>

                <div>
                    <h2>Autres</h2>
                    <div className="skills_container">{makeOtherSkills()}</div>
                </div>
                <div>
                    <h2>IDE</h2>
                    <div className="skills_container">{makeIDESkills()}</div>
                </div>
            </div>
        </>
    );
};

export default Skills;
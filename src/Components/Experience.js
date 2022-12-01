import "../css/experience.css";
import Divider from "./Divider";

const Experience = (props) => {
    const data = props.props;

    const makeExperience = () => {
        const experience = [];
        for (let i = 0; i < Object.keys(data).length; i++) {
            experience.push( 
            <li className="event" data-date={data[i].date} key={i} >
                <h3>{data[i].name}</h3>
                <p>{data[i].fonction}</p>
            </li>
            );
        }
        return experience;
    };  


    return (
        <>
            <div className="notContainer">
                <div className="experience__container notSelect">
                    <div id="experience">
                        <ul id="timeline" className="timeline">
                            {makeExperience()}
                        </ul>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    )
};

export default Experience;

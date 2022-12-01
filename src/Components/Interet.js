import Divider from "./Divider"

import "../css/interet.css"

const Interet = () => {
    return (
        <>
            <div id="interet__box">
                <h1>Centre d'interêt</h1>
                <div>
                    <div>
                        <img src="../image/Profil/Conduire.webp" alt="Conduire" title="Conduire" />
                        <div className="text">
                            <h2>Conduire</h2>
                        </div>
                    </div>
                    <div>
                        <img src="../image/Profil/Challenge.webp" alt="Challenge" title="Challenge" />
                        <div className="text">
                            <h2>Challenge</h2>
                        </div>
                    </div>
                    <div>
                        <img src="../image/Profil/Programmer.webp" alt="Programmer" title="Programmer" />
                        <div className="text">
                            <h2>Programmer</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default Interet
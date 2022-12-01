import Divider from "./Divider";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/projet.css";
import { useState } from "react";
import Modals from "./Modals";


const Projets = (props) => {
    const [isMobile, setIsMobile] = useState(false);
    const [project, setProject] = useState(props.props["Advender"]);

    const data = props.props;

    const handleClick = (e) => {
        if (e.target.classList.contains("more")) {
            const id = e.target.id;
            setProject(data[id]);
            const modal = document.getElementById("modal");
            modal.style.display = "flex";
        }
    }

    const sliders = () => {
        const slides = [];
        for (const projet in data) {
            slides.push(
                <SwiperSlide key={projet} className="card">
                    <div className="card-content">
                        <div className="image">
                            <img src={data[projet].img} alt={data[projet].projectName} title={data[projet].projectName} loading="lazy" />
                        </div>
                        <h2>{data[projet].projectName}</h2>
                        <button className="more" id={data[projet].id} onClick={handleClick}>En savoir plus</button>
                    </div>
                </SwiperSlide>
            )
        }
        return slides;
    };

    window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });

    return (
        <>
            <div id="projet__box">
                <Swiper
                    slidesPerView={isMobile ? 1 : 3}
                    spaceBetween={30}
                    slidesPerGroup={isMobile ? 1 : 3}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper container"
                >
                    {sliders()}
                </Swiper>

                <div id="modal" className="modal">
                    <Modals props={project} />
                </div>
            </div>
            <Divider />
        </>
    );
}

export default Projets;
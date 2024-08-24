"use client"

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
// Default theme
import '@splidejs/react-splide/css';


// or other themes
import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';


// or only core styles
// import '@splidejs/react-splide/css/core';


const Slider = () => {
    const options = {
        type: 'fade',
        // height: '15rem',
        // gap: '1rem',
        autoplay: true,
        // cover: true,
        arrows: false,
        pagination: false,
        pauseOnHover: false,
        resetProgress: false,
    };
    return (
        <>
            <Splide
                options={options} tag="section" hasTrack={false} aria-label="My Favorite Images">

                <SplideTrack>

                    <SplideSlide data-splide-interval="3000">
                        <img src="imgs/slider/1.jpg" alt="Image 1"
                            className="kenburns-top" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="imgs/slider/2.jpg"
                            className="kenburns-top" alt="Image 2" />
                        <div>helll</div>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="imgs/slider/1.jpg" alt="Image 1"
                            className="kenburns-top" />
                    </SplideSlide>
                    <SplideSlide>
                        <img src="imgs/slider/2.jpg"
                            className="kenburns-top" alt="Image 2" />
                    </SplideSlide>

                </SplideTrack>


            </Splide>
        </>
    )
}

export default Slider

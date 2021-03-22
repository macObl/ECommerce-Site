import React, { useState } from 'react';
import { SliderData } from "./SliderData";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import useStyles from './styles';

const Home = ({ slides }) => {
    const classes = useStyles();

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className={classes.home} id="home">
            <BiLeftArrow className={classes.leftArrow} onClick={prevSlide} />
            <BiRightArrow className={classes.rightArrow}  onClick={nextSlide} />
            <div>
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? classes.active : classes.slide} key={index}>
                            {index === current && (<img src={slide.image} alt='test' className={classes.image} />)}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Home

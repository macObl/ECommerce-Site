import React from 'react';

import './styles.css';
import logo from '../../../assets/img/test.png';

const Intro = () => {
    return (
        <section class="about section" id="about">
            {/* <h2 class="section-title">MEKAURA</h2> */}

            <div class="about__container bd-grid">
                <div class="about__img">
                    <img src={logo} alt="Commerce.js" />
                </div>

                <div>
                    <h2 class='about__subtitle'>MEKAURA Mechanical Keyboard</h2>
                    <p class="about__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci consectetur, architecto quas fugiat, iste inventore facere repellendus delectus id, vitae blanditiis.</p>
                    <button class="intro_btn">Check it out</button>
                </div>
            </div>
        </section>
    )
}

export default Intro

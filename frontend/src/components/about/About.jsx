import React from 'react';
import aboutPicture from "../../images/me.svg";

function About() {
    return (
        <section className="main main__about">
            <main className="about__container">
                <article className="about__picture">
                    <img src={aboutPicture} alt="Picture of me" />
                </article>
                <article className="about__info">
                    <h1 className="about__heading">Chalita Ndunu</h1>
                    <p className="about__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, voluptatibus?
                        I aspire to connect people through superior design and exceptional projects. I believe that great results are only achieved by combining great ideas. So let's have a coffee!
                    </p>
                </article>
            </main>
        </section>
    );
}

export default About;
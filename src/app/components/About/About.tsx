import React from 'react';
import Agenda from './Agenda';
import Pros from './Pros';

function About() {
    return (
        <section className="w-[70%] 2xl:w-[40%] text-dark-blue">
            <Agenda />
            <Pros />
        </section>
    );
}

export default About;

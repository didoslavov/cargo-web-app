import { BiEnvelope } from 'react-icons/bi';
import React from 'react';
import Form from './Form';

function Cta() {
    return (
        <section className="flex justify-center items-center mt-12 lg:mt-[100px] bg-dark-blue-700 w-full text-center py-12 lg:py-[100px]">
            <article className="flex flex-col items-center xl:w-[40%]">
                <h2 className="font-grotesk 2xl:text-7xl font-semibold md:leading-[108%] md:-tracking-[4px] text-white xl:text-6xl lg:text-5xl sm:text-4xl text-xl">
                    Готово ли сте да работим заедно?
                </h2>
                <p className="mt-3 md:mt-[24px] leading-[170%] -tracking-[0] text-white text-xs md:text-[20px] w-[90%] lg-[80%]">
                    Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
                </p>
                <Form />
            </article>
        </section>
    );
}

export default Cta;

import { BiEnvelope } from 'react-icons/bi';
import React from 'react';
import Form from './Form';

function Cta() {
    return (
        <section className="flex justify-center mt-[100px] bg-dark-blue-700 w-full text-center py-[100px]">
            <article className="flex flex-col items-center w-[40%]">
                <h2 className="font-grotesk text-[72px] font-semibold leading-[108%] -tracking-[4px] text-white">
                    Готово ли сте да работим заедно?
                </h2>
                <p className="mt-[24px] leading-[170%] -tracking-[0] text-white text-[20px] w-[80%]">
                    Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на всички въпроси
                </p>
                <Form />
            </article>
        </section>
    );
}

export default Cta;

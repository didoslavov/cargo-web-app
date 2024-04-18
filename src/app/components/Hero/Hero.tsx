import React from 'react';
import Image from 'next/image';
import truck from '/public/truck.png';

function Hero() {
    return (
        <>
            <h1 className="font-grotesk font-semibold 2xl:text-7xl md:leading-[108%] md:-tracking-[4px] text-dark-blue w-[80%] text-center mt-4 md:mt-[72px] xl:text-6xl lg:text-5xl sm:text-4xl text-xl">
                Гъвкави решения за сухопътен транспорт за всеки клиент
            </h1>
            <Image
                src={truck}
                width={969}
                height={690}
                alt="Камион, паркиран на рампа за товарене"
                className="mt-6 lg:mt-[64px] max-w-[80%]"
            />
        </>
    );
}

export default Hero;

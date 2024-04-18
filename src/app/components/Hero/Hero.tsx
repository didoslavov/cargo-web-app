import React from 'react';
import Image from 'next/image';
import truck from '/public/truck.png';

function Hero() {
    return (
        <>
            <h1 className="font-grotesk font-semibold text-7xl leading-[108%] -tracking-[4px] text-dark-blue w-[50%] text-center mt-[72px]">
                Гъвкави решения за сухопътен транспорт за всеки клиент
            </h1>
            <Image src={truck} width={969} height={690} alt="Камион, паркиран на рампа за товарене" className="mt-[64px]" />
        </>
    );
}

export default Hero;

import React from 'react';
import MainHeading from '../MainHeading';
import Image from 'next/image';
import truck from '/public/truck.png';

function Hero() {
    return (
        <>
            <MainHeading />
            <Image src={truck} width={969} height={690} alt="Image of truck parked on a ramp" className="mt-[64px]" />
        </>
    );
}

export default Hero;

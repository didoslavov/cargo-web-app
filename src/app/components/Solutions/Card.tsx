import Image, { StaticImageData } from 'next/image';
import React from 'react';

function Card({ src, heading, alt }: { src: StaticImageData; heading: string; alt: string; children?: React.ReactNode }) {
    return (
        <figure className="flex flex-col items-center text-center">
            <Image src={src} alt={alt} width={416} height={300} className="mb-[30px] rounded-[16px] w-[80%] lg:w-full" />
            <h3 className="font-grotesk font-semibold text-xs md:text-[24px] md:leading-[140%] md:-tracking-[0.5px]">
                {heading}
            </h3>
        </figure>
    );
}

export default Card;

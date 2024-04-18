import Image, { StaticImageData } from 'next/image';
import React from 'react';

function Card({ src, heading, alt }: { src: StaticImageData; heading: string; alt: string; children?: React.ReactNode }) {
    return (
        <figure>
            <Image src={src} alt={alt} width={416} height={300} className="mb-[30px] rounded-[16px]" />
            <h3 className="font-grotesk font-semibold text-[24px] leading-[140%] -tracking-[0.5px]">{heading}</h3>
        </figure>
    );
}

export default Card;

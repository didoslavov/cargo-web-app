import Image, { StaticImageData } from 'next/image';
import React from 'react';

function Card({ src, heading, alt }: { src: StaticImageData; heading: string; alt: string; children?: React.ReactNode }) {
    return (
        <figure className="flex flex-col items-center lg:items-start">
            <Image
                src={src}
                alt={alt}
                width={416}
                height={300}
                className="mb-2 md:mb-[30px] rounded-[16px] md:w-full hover:scale-105 transition duration-500"
            />
            <h3 className="font-grotesk font-semibold text-lg md:text-[24px] md:leading-[140%] md:-tracking-[0.5px]">
                <a href="#" className="hover:underline transition-all">
                    {heading}
                </a>
            </h3>
        </figure>
    );
}

export default Card;

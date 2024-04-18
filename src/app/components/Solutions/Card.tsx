import Image, { StaticImageData } from "next/image";

function Card({
  src,
  heading,
  alt,
}: {
  src: StaticImageData;
  heading: string;
  alt: string;
  children?: React.ReactNode;
}) {
  return (
    <figure className="flex flex-col items-center lg:items-start">
      <Image
        src={src}
        alt={alt}
        width={416}
        height={300}
        className="mb-2 rounded-[16px] transition duration-500 hover:scale-105 md:mb-[30px] md:w-full"
      />
      <h3 className="font-grotesk text-lg font-semibold md:text-[24px] md:leading-[140%] md:-tracking-[0.5px]">
        <a href="#" className="transition-all hover:underline">
          {heading}
        </a>
      </h3>
    </figure>
  );
}

export default Card;

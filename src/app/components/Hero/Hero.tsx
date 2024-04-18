import Image from "next/image";
import truck from "/public/truck.png";

function Hero() {
  return (
    <>
      <h1 className="mt-4 w-[80%] text-center font-grotesk text-xl font-semibold text-dark-blue sm:text-4xl md:mt-[72px] md:leading-[108%] md:-tracking-[4px] lg:text-5xl xl:text-6xl 2xl:text-7xl">
        Гъвкави решения за сухопътен транспорт за всеки клиент
      </h1>
      <Image
        src={truck}
        width={969}
        height={690}
        alt="Камион, паркиран на рампа за товарене"
        className="mt-6 max-w-[80%] lg:mt-[64px]"
      />
    </>
  );
}

export default Hero;

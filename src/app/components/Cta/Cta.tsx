import Form from "./Form";

function Cta() {
  return (
    <section className="mt-12 flex w-full items-center justify-center bg-dark-blue-700 py-12 text-center lg:mt-[100px] lg:py-[100px]">
      <article className="flex w-[80%] flex-col items-center xl:w-[40%]">
        <h2 className="font-grotesk font-semibold text-white sm:text-2xl md:text-5xl md:leading-[108%] md:-tracking-[4px] lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Готови ли сте да работим заедно?
        </h2>
        <p className="lg-[80%] mt-3 w-[90%] text-xs leading-[170%] -tracking-[0] text-white md:mt-[24px] md:text-[20px]">
          Оставете вашият телефон и ние ще се свържем с вас, за да отговорим на
          всички въпроси
        </p>
        <Form />
      </article>
    </section>
  );
}

export default Cta;

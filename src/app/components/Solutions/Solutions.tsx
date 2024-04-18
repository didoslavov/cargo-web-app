import danger from "/public/danger.png";
import frigo from "/public/frigo.png";
import big from "/public/big.png";
import Card from "./Card";

function Solutions() {
  const services = [
    {
      src: danger,
      heading: "Опасни товари (ADR)",
      alt: "Опасен товар, натоварен на кораб",
    },
    {
      src: frigo,
      heading: "Хладилен транспорт",
      alt: "Човек товари замразени продукти",
    },
    {
      src: big,
      heading: "Извънгабаритни товари",
      alt: "Контейнери със стока, на пристанище",
    },
  ];

  return (
    <article className="mb-11 flex w-[70%] flex-col items-center justify-center text-dark-blue md:mb-[100px] xl:items-start">
      <h2 className="mb-12 mt-11 font-grotesk text-2xl font-semibold -tracking-[2px] md:mt-[100px] lg:mb-[62px] lg:text-[48px] xl:self-start xl:leading-[115%]">
        Други услуги
      </h2>
      <div className="flex flex-col gap-8 md:w-full md:justify-center lg:flex-row lg:gap-[24px] xl:justify-start">
        {services.map((s, i) => (
          <Card key={i} src={s.src} heading={s.heading} alt={s.alt} />
        ))}
      </div>
    </article>
  );
}

export default Solutions;

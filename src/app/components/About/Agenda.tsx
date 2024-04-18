import Summary from "./Summary";

function Agenda() {
  return (
    <article className="text-xs leading-[170%] tracking-[0px] md:text-[18px]">
      <h2 className="mt-8 font-grotesk text-4xl font-semibold leading-[115%] -tracking-[2px] md:text-[48px] lg:mt-[64px]">
        Решения
      </h2>
      <Summary />
      <ul className="list-inside list-disc">
        <li>
          Решения за всички видове стоки (конвенционални, изискващи температурен
          режим, опасни товари)
        </li>
        <li>
          Превоз на стоки от и до Балканите и всички страни на ЕС, цели и
          частични товари;
        </li>
        <li>Взимане на стоки и доставки за от и в България;</li>
        <li>
          Съчетаване на дълги и къси дестинации за ефективно планиране и
          разходи;
        </li>
        <li>Регулярни групажни линии;</li>
        <li>Транспортни услуги до Турция и Близкия изток;</li>
        <li>
          Спазване на изискванията за качество и стандарти на клиентите и/или на
          техни специфични изисквания.
        </li>
      </ul>
    </article>
  );
}

export default Agenda;

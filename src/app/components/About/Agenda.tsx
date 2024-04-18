import Summary from './Summary';

function Agenda() {
    return (
        <article className="text-[18px] leading-[170%] tracking-[0px]">
            <h2 className="font-grotesk text-[48px] leading-[115%] -tracking-[2px] font-semibold mt-[64px]">Решения</h2>
            <Summary />
            <ul className="list-disc list-inside">
                <li>Решения за всички видове стоки (конвенционални, изискващи температурен режим, опасни товари)</li>
                <li>Превоз на стоки от и до Балканите и всички страни на ЕС, цели и частични товари;</li>
                <li>Взимане на стоки и доставки за от и в България;</li>
                <li>Съчетаване на дълги и къси дестинации за ефективно планиране и разходи;</li>
                <li>Регулярни групажни линии;</li>
                <li>Транспортни услуги до Турция и Близкия изток;</li>
                <li>Спазване на изискванията за качество и стандарти на клиентите и/или на техни специфични изисквания.</li>
            </ul>
        </article>
    );
}

export default Agenda;

//
//
//
//
//
//
//
//

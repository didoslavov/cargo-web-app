import danger from '/public/danger.png';
import frigo from '/public/frigo.png';
import big from '/public/big.png';
import Card from './Card';

function Solutions() {
    const services = [
        { src: danger, heading: 'Опасни товари (ADR)', alt: 'Опасен товар, натоварен на кораб' },
        { src: frigo, heading: 'Хладилен транспорт', alt: 'Човек товари замразени продукти' },
        { src: big, heading: 'Извънгабаритни товари', alt: 'Контейнери със стока, на пристанище' },
    ];

    return (
        <article className="text-dark-blue flex items-center justify-center flex-col mb-11 md:mb-[100px] w-[70%] xl:items-start">
            <h2 className="text-2xl xl:self-start font-grotesk font-semibold lg:text-[48px] xl:leading-[115%] -tracking-[2px] mt-11 md:mt-[100px] mb-12 lg:mb-[62px]">
                Други услуги
            </h2>
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-[24px] md:justify-center xl:justify-start md:w-full">
                {services.map((s, i) => (
                    <Card key={i} src={s.src} heading={s.heading} alt={s.alt} />
                ))}
            </div>
        </article>
    );
}

export default Solutions;

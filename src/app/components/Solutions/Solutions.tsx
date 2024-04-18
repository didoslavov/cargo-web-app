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
        <article className="text-dark-blue flex items-center justify-center flex-col mb-11 md:mb-[100px] w-[80%] xl:items-start lg:ps-32">
            <h2 className="text-xl xl:self-start font-grotesk font-semibold lg:text-[48px] xl:leading-[115%] -tracking-[2px] mt-11 md:mt-[100px] mb-[62px]">
                Други услуги
            </h2>
            <div className="flex flex-col md:flex-row gap-[24px]">
                {services.map((s, i) => (
                    <Card key={i} src={s.src} heading={s.heading} alt={s.alt} />
                ))}
            </div>
        </article>
    );
}

export default Solutions;

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
        <article className="text-dark-blue flex items-center flex-col mb-[100px]">
            <h2 className="self-start font-grotesk font-semibold text-[48px] leading-[115%] -tracking-[2px] mt-[100px] mb-[62px]">
                Други услуги
            </h2>
            <div className="flex gap-[24px]">
                {services.map((s, i) => (
                    <Card key={i} src={s.src} heading={s.heading} alt={s.alt} />
                ))}
            </div>
        </article>
    );
}

export default Solutions;

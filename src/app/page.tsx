import Image from 'next/image';
import Header from './components/Header/Header';
import MainHeading from './components/MainHeading';
import truck from '/public/truck.png';

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <MainHeading />
            <Image src={truck} width={969} height={690} alt="Image of truck parked on a ramp" className="mt-[64px]" />
        </main>
    );
}

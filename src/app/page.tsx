import Header from './components/Header/Header';
import MainHeading from './components/MainHeading';

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <MainHeading />
        </main>
    );
}

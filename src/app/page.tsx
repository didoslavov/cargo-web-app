import Header from './components/Header/Header';
import About from './components/About/About';
import Hero from './components/Hero/Hero';

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <Header />
            <Hero />
            <About />
        </main>
    );
}

import Footer from "../component/layout/footer/footer";
import Header from "../component/layout/header/header";
import HeroBanner from "../component/layout/hero-banner/hero-banner";
import MainSection from "../component/layout/main-section/main-section";

export default function UpboxWrapper() {
    return (
        <div className="flex flex-col w-full">
            <Header />
            <HeroBanner />
            <MainSection />
            <Footer />
        </div>
    );
}

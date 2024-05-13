import Image from "next/image";
import Button from "../../ui/button";
import Card from "../../ui/card";
import { HeroCardContent } from "@/app/constants/hero-banner";

export default function HeroBanner() {
    return (
        <div className="hero-banner bg-[#F5F8FF]">
            <div className="hero-banner-content w-full flex flex-col md:flex-row">
                <div className="text-content flex flex-col">
                    <Card cardTitle={HeroCardContent.title} cardText={HeroCardContent.text} />
                    <Button buttonText={"Sign Up >"} buttonClasses={"border-[#EF8094] btn-sign-up font-medium bg-white border-4 mt-10"} />
                </div>
                <div className="image-content flex flex-row">
                    <Image className={'hidden lg:block'} src={'/assets/svg/box-desktop.svg'} width={120} height={120} alt={'Hero Box'} />
                    <Image className={'block lg:hidden'} src={'/assets/svg/box-mobile.svg'} width={120} height={120} alt={'Hero Box'} />
                </div>
            </div>
        </div>
    );
}

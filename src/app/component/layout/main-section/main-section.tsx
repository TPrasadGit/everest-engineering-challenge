import { MainSectionContent } from "@/app/constants/main-section";
import Title from "../../ui/title";
import SectionContent from "./section-content";
import Button from "../../ui/button";
import Image from "next/image";

export default function MainSection() {
    return (
        <div className="main-section flex flex-col items-center">
            <div className="title-section flex flex-col items-center">
                <Title value={MainSectionContent.sectionTitle} />
                <Image src={MainSectionContent.sectionTitleImage} alt={'Underline'} height={20} width={260} />
            </div>
            {MainSectionContent.sectionContent.map((sectionContent, index) => (
                <SectionContent key={index} {...sectionContent} index={index + 1} className={index % 2 ? 'even-section' : 'odd-section'}/>
            ))}
            <Button
                buttonText={MainSectionContent.sectionButtonText}
                buttonClasses={"border-[#EF8094] btn-work-section font-medium bg-white border-4 mt-10"}
            />
        </div>
    );
}

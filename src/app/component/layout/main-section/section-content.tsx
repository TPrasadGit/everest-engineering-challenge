import Card from "../../ui/card";
import Image from "next/image";
import { ISectionContent } from "@/app/model/main-section.model";

export default function SectionContent(sectionContent: ISectionContent) {
    return (
        <div className={`section-content w-full flex flex-col md:flex-row items-center ${sectionContent.className}`}>
            <div className="flex">
                <h6 className={`text-[#EF8094] section-index absolute`}>{sectionContent.index}</h6>
            </div>
            <div className="image-content flex flex-row">
                <Image
                    className={`img-main ${sectionContent.backgroundImage ? 'img-primary-back' : 'img-primary'}`}
                    src={sectionContent.image}
                    width={120}
                    height={120}
                    alt={sectionContent.text}
                />
                {
                    sectionContent.backgroundImage ?
                        <Image className={'hidden md:block img-background'} src={sectionContent.backgroundImage} width={120} height={120} alt={sectionContent.text} /> : <></>
                }
            </div>
            <div className="text-content flex flex-col">
                <Card cardTitle={sectionContent.title} cardText={sectionContent.text} />
            </div>
        </div>
    );
}

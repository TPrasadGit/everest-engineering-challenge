import { FooterMenuItems } from "@/app/constants/footer-menu";
import Image from "next/image";

export default function FooterMenu() {
    return (
        <div className="footer-menu flex flex-row xl:gap-x-6 gap-x-4">
            {FooterMenuItems.map((footerMenu, index) => (
                <Image className="footer-social-icon" key={index} src={footerMenu.src} alt={footerMenu.menuName} height={24} width={24}/>
            ))}
        </div>
    );
}

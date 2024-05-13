import Logo from "../../ui/logo";
import FooterMenu from "./footer-menu";

export default function Footer() {
    return (
        <div className="footer-panel w-full">
            <div className="footer flex border-2 border-[#C4C4C4] bg-[#EEEEEE] w-full justify-between items-center">
                <Logo />
                <FooterMenu />
            </div>
        </div>
    );
}

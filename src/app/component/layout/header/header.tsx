import Button from "../../ui/button";
import Logo from "../../ui/logo";
import HeaderMenu from "./header-menu";
import HeaderMobileMenu from "./header-mobile-menu";

export default function Header() {
    return (
        <div className="header bg-repeat-x bg-white top-0 fixed w-full flex justify-between flex-row items-center">
            <Logo />
            <div className="flex items-center flex-row">
                <HeaderMenu />
                <Button buttonText={"Log in >"} buttonClasses={"sm:hidden md:block border-[#4A4A4A] border-2 md:ml-8 xl:ml-10 btn-login font-medium lg:text-sm"} />
                <HeaderMobileMenu />
            </div>
        </div>
    );
}

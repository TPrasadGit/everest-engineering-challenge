'use client'

import { MainMenuItems } from "@/app/constants/main-menu";
import MenuItem from "../../ui/menu-item";
import { useState } from "react";
import Image from "next/image";

export default function HeaderMobileMenu() {
    const [mobileMenu, setMobileMenu] = useState(false);

    return (
        <div className={`header-mobile-menu sm:flex md:hidden`}>
            <Image
                src={!mobileMenu ? '/assets/svg/hamburger.svg' : '/assets/svg/hamburger-close.svg'}
                alt={""}
                width={41}
                height={30}
                onClick={() => setMobileMenu(!mobileMenu)}
                className="z-[99]"
            />
            <div className={`bg-[#F5F8FF] mobile-menu-item fixed w-full items-center ${!mobileMenu ? 'hidden' : 'flex'}`}>
                <div className="flex w-full text-center gap-y-10 flex-col">
                    {
                        MainMenuItems.map((mainMenu, index) => (
                            <MenuItem key={index} src={mainMenu.src} menuName={mainMenu.menuName} />
                        ))
                    }
                    <MenuItem src={''} menuName={'Log in'} />
                </div>
            </div>
        </div>
    );
}

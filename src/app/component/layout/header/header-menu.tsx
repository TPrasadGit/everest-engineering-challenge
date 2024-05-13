import { MainMenuItems } from "@/app/constants/main-menu";
import MenuItem from "../../ui/menu-item";

export default function HeaderMenu() {
    return (
        <div className="header-menu sm:hidden md:flex xl:gap-x-10 md:gap-x-8">
            {
                MainMenuItems.map((mainMenu, index) => (
                    <MenuItem key={index} src={mainMenu.src} menuName={mainMenu.menuName} />
                ))
            }
        </div>
    );
}

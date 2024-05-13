import Link from "next/link";

export default function MenuItem({
    src,
    menuName
} : {
    src: string,
    menuName: string,
}) {
    return (
        <>
            <Link className={'menu-link font-medium xl:text-sm font-roboto uppercase leading-4 tracking-widest'} href={src} >{menuName}</Link>
        </>
    );
}

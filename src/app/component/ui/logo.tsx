import Image from "next/image";

export default function Logo({
    classNames
}: {
    classNames?: string
}) {
    return (
        <Image className={`img-logo ${classNames}`} src={"/assets/svg/logo.svg"} alt={"Logo"} width={127} height={39} />
    );
}

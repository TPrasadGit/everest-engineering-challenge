
export default function Button({
    buttonText,
    buttonClasses,
    onButtonClick
} : {
    buttonText: string,
    buttonClasses: string,
    onButtonClick?: () => {},
}) {
    return (
        <button className={`rounded-full uppercase font-roboto font-medium leading-4 tracking-widest ${buttonClasses}`} onClick={onButtonClick}>{buttonText}</button>
    );
}

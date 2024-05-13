import Title from "./title";

export default function Card({
    cardTitle,
    cardText,
}: {
    cardTitle: string,
    cardText: string,
    classNames?: string
}) {
    return (
        <div className={`flex flex-col`}>
            <Title value={cardTitle} />
            <p className="font-roboto">{cardText}</p>
        </div>
    );
}

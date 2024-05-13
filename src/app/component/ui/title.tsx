export default function Title({
    value,
    classNames,
}: {
    value?: string,
    classNames?: string,
}) {
    return (
        <h3 className={`${classNames} font-medium font-roboto`}>{value}</h3>
    );
}

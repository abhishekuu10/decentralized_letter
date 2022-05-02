type Props = {
    label: string
    onClick: () => void
    marginTop: number
}
const Button: React.FC<Props> = ({ label, onClick, marginTop }) => {
    return (
        <button
            className={marginTop ? "rounded-xl bg-blue-400 py-2 px-6 text-white mt-8" :
                "rounded-xl bg-blue-400 py-2 px-6 text-white"}
            onClick={onClick}
        > {label}
        </button >
    )
}
export default Button
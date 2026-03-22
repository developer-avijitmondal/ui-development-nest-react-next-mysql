type Props = {
    name: string
}

function Header({ name }: Props) {
    return <h2>Header {name}</h2>;
}

export default Header
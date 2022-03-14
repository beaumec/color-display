const Square = (props) => {
    const { colorValue, label } = props
    return (
        <section className= "square" style={{backgroundColor: colorValue}}>
            <p>{label?label: "Empty Label"}</p>
        </section>
    )
}
Square.defaultProps = {
    label: "Please enter a label bitch"
}
export default Square
const Input = (props) => {
    const { colorValue, setColorValue, label, setLable, title, setTitle, variation } = props

    if (variation === 1) {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div style={{backgroundColor: 'red'}}>THis input is for changing colors</div>
                <input
                    autoFocus
                    type="text"
                    placeholder="Add color name"
                    required
                    value={colorValue}
                    onChange={(e) => {
                        const { target: { value } } = e
                        setColorValue(value);
                    }}
                />
                J
            </form>
        ) 
    } else if (variation === 2) {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div style={{
                    backgroundColor: "papayawhip",
                    color: '#fff'
                }}>this input is for changing the label</div>
                <input
                    autoFocus
                    type="text"
                    placeholder="Add a label"
                    required
                    value={label}
                    onChange={(e) => {
                        const { target: { value } } = e
                        setLable(value);
                    }}
                />
            </form>
        )
    } else if (variation === 3) {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                <div>this input is for changing the title</div>
                <input
                    autoFocus
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        const { target: { value } } = e
                        setTitle(value);
                    }}
                />
            </form>
        )
    }
}
export default Input;
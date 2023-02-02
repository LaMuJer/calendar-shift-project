const ColorHighlight = ({bgColor}) => {
    return (
        <span
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 0,
                backgroundColor: `${bgColor}`,
                display: "inline-block",
                top: 0,
                left: 0,
                opacity: 1,
            }}
        ></span>
    )
}

export default ColorHighlight

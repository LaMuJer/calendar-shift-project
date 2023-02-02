const ColorHighlight = ({ bgColor }) => {
    return (
        <span
            style={{
                width: '55%',
                height: '50%',
                position: 'absolute',
                zIndex: '0',
                backgroundColor: `${bgColor}`,
                display: 'inline-block',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                borderRadius: '50%',
}}
        ></span >
    )
}

export default ColorHighlight

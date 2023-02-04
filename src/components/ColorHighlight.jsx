const ColorHighlight = ({ bgColor, shift }) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            zIndex: '0',
            display: 'inline-block',
            top: '0',
            left: '0',
        }}>
            <span
                style={{
                    width: '42%',
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
            <span style={{
                width: '100%',
                height: '10%',
                position: 'absolute',
                zIndex: '0',
                display: 'inline-block',
                bottom: '12%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#ffffffae'
            }}>
                {shift}
            </span>
        </div>
    )
}

export default ColorHighlight

import '../App.css'


const Modal = ({display}) => {

    console.log(display)

    return (
        <div>
            <h1 className={display ? 'flex' : 'none'}>Modal</h1>
        </div>
    )
}

export default Modal

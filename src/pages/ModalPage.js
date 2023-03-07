import Modal from '../components/Modal'
import Button from '../components/Button'
import { useState } from 'react'

function ModalPage() {
    const [showModal, setModal] = useState(false)
    const handleClick = () =>[
        setModal(true)
    ]
    const handleClose = () =>{
        setModal(false)
    }
    const actionBar=<div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Important agreement
        </p>
    </Modal>

    return(
        // thanks to portal our modal will work even if we put positined parent element
        <div> 
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && modal}        
            
        </div>
    )
}

export default ModalPage
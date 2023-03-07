import ReactDOM from 'react-dom'
import { useEffect } from 'react'

function Modal ({onClose, children, actionBar}){
    useEffect(()=>{
        //adding this classname to body element in order to prevent
        //scrolling when we have a lot of text on the screen
        document.body.classList.add('overflow-hidden')

        //we also need to remove it when Modal is not active
        return ()=>{
            document.body.classList.remove('overflow-hidden')
        }
    }, [])
    return ReactDOM.createPortal(
    <div>
        <div onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"></div>
        <div className="fixed inset-40 p-10 bg-white">
            <div className='flex flex-col justify-between h-full'>          
            {children}
                <div className='flex justify-end'>
                   {actionBar}  
                </div>
                
            </div>
        </div>
    </div>,
    document.querySelector('.modal-container')
    //it creates new html for this class name (it is specified in the index.html)
    )

     
}

export default Modal
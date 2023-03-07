import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go"
import Panel from "./Panel.js"

function Dropdown({options, selection, onSelect}){
    const [isOpen, setOpen] = useState(false)
    const divEl = useRef() //reference to div element

    useEffect(()=>{
        const handler = (event)=>{
            if(!divEl.current){
                return
            }
            if(!divEl.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.addEventListener('click', handler, true)
        return () =>{
            document.removeEventListener('click', handler)
        }

    }, [])

    const handleClick = ()=>{
        setOpen(!isOpen)
    } 
    const handleOptClick = (option)=>{
        setOpen(!isOpen)
        onSelect(option)
    }


    const renderOptions = options.map((opt)=>{
        return <div 
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
         onClick={()=>handleOptClick(opt)} key={opt.value}>{opt.label}
         </div>
    })

    
    
    return <div ref={divEl} className="w-48 relative">
        <Panel 
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full "
        onClick={handleClick}>
            {selection?.label || 'Select..'}
        <GoChevronDown className="text-lg"/>
        </Panel>
        {isOpen && (
        <Panel className="absolute top-full border rounded p-3 shadow bg-white w-full">
            {renderOptions}
        </Panel>  
        )}
       </div>
     
}

export default Dropdown
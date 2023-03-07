import { useState } from "react";
import Dropdown from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelect] = useState(null)
  const handleSelect = (option)=>{
      setSelect(option)
  }
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'}
  ]

  return <div className="flex">
    <Dropdown options={options} selection={selection} onSelect={handleSelect} />     
    </div>
}

export default DropdownPage;

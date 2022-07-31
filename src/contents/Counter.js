import { useState } from "react"


const Counter = () => {
const [incval, setincval] = useState(0)
    const inc = () => {
        setincval(incval+1)

    }
    const dec = () => {
        setincval(incval-1)
    }


return(
    <div className="counter">
<h1>Counter Test</h1>   
<button onClick={dec}  disabled={!incval} >-</button>
    
    <p>{incval} </p>
    <button onClick={inc} >+</button>
</div>
)

}

export default Counter
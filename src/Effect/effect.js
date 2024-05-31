import { useState,useEffect } from "react";


function Effect(){
    let [count1,setcount1] = useState(0);
    let [count2,setcount2] = useState(0);
    function print(e){
        setcount1(count1+1);
    }
    return <div>
        <button onClick={print}>Click Me</button>
        <p>{`count1 is ${count1}`}</p>
    </div>
}

export default Effect;
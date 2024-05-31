import { useRef , useState } from "react";
// let item = [
//     {id : '1',
//         title : 'xyz',
//     },
//     {id : '1',
//     title : 'abc',
//     }
// ]



function Products() {
    let pRef = useRef(0);
    let href = useRef(0);
    let sref = useRef(0);
    let [inputV, setInputV] = useState('class');

    function print() {
        const value = href.current.value;
        setInputV(value);
    }

    return (
        <div>
            <h1 ref={pRef} onClick={print}>Hi</h1>
            <h2>here</h2>
            I am product
            <input ref={href} type="text" onChange={print} value={inputV}/>
            <h2 ref={sref}>{`here ${inputV}`}</h2>
        </div>
    );
}

export let a = 20;
export let b = 200;

export default Products;
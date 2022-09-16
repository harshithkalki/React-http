import React, { useState } from 'react'

// function UseState() {
//     const [count, setCount] = useState(10);
//     const num = useState(2);
//     return (
//         <div>
//             <button onClick={() => { setCount(count + 2) }}>count {count}</button>
//             {/* <button onClick={inc}>num {num}</button> */}
//         </div>
//     )
// }

function UseState() {
    const [{ num1, num2 }, setNum] = useState({ num1: 10, num2: 20 });

    return (
        <div>
            <div>{num1}</div>
            <div onClick={() => setNum(prev => ({ ...prev, num2: prev.num2 + 1 }))}>{num2}</div>
            <button onClick={() => {
                setNum((prev) => ({
                    ...prev,
                    num1: prev.num1 + 1
                }))
            }}>count + </button>
        </div >
    )
}

export default UseState
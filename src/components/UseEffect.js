import React, { useEffect } from 'react'
import { User } from './User'
import Hello from './Hello'
function UseEffect() {
    const [value, change] = User({ email: "", password: "", firstname: "" })
    const done = () => {
        alert(`${value.email} ${value.password} ${value.firstname}`)
    }
    // const [showHello, changeHello] = React.useState(true)
    useEffect(() => {
        console.log("render useffect")
        return () => {
            console.log("unmount")
        }
    }, [value.password, value.email])
    return (

        <div>
            {/* {showHello && <Hello />} */}
            <h1>Login</h1>
            <>
                <input type='email' name="email" value={value.email} placeholder='email' onChange={change}></input>
                <br></br>
                <input type='password' name="password" value={value.password} placeholder='password' onChange={change}></input>
                <br></br>
                <input type='text' name="firstname" value={value.firstname} placeholder='firstname' onChange={change}></input>
                <br></br>
                <button onClick={done}>submit</button>
                {/* <button onClick={() => changeHello(!showHello)}>toggle</button> */}
            </>
        </div>
    )
}

export default UseEffect
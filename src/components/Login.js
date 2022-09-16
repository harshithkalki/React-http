import React, { useState } from "react";
import { User } from "./User"

function Login() {
    const [value, changed] = User({ email: "", password: "" })
    const send = (e) => {
        alert(`${value.email} ${value.password}`)
    }
    return (
        <div>
            <h1>Login</h1>
            <div>

                <input type='email' name='email' value={value.email} placeholder='Email id' onChange={changed}></input>
            </div>
            <div>
                <input type='password' name='password' value={value.password} placeholder="Password" onChange={changed}></input>
            </div>
            <div>
                <button onClick={send}>Submit</button>
            </div>

        </div>
    )

}

export default Login
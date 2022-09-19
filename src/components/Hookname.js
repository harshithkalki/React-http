import React from 'react'

function Hookname() {

    const [name, setname] = React.useState({ firstname: "", lastname: "" });
    const display = () => {
        alert(`${name.firstname} ${name.lastname}`)
    }
    return (
        <div>
            <input type='text' placeholder='firstname' value={name.firstname} onChange={(e) => setname({ ...name, firstname: e.target.value })}></input>
            <input type='text' placeholder='lastname' value={name.lastname} onChange={(e) => setname({ ...name, lastname: e.target.value })}></input>

            <h2>firstName: {name.firstname}</h2>
            <h2>lastname: {name.lastname}</h2>
            <button onClick={display}>Done</button>
        </div >

    )
}

export default Hookname
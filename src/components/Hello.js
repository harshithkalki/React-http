import React, { useEffect } from 'react'

function Hello() {
    useEffect(() => {
        console.log("render")

        return () => {
            console.log("unmount")
        }
    }, [])
    return (
        <div>Hello</div>
    )
}

export default Hello
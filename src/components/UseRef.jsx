import React from "react";
import { Flex } from '@chakra-ui/react'

function UseRef(){
    const [box,changebox]=React.useState("");
    const inputRef=React.useRef();
return(
    <Flex height="100vh"  justifyContent="center" alignItems="center">
        <Flex direction="column" backgroundColor="gray.700" padding={15} >
        <input placeholder="email@domain.com" ref={inputRef} mb={3} name="inputBox" type="text" value={box} onChange={(e)=>{changebox(e.target.value)}}></input>
        <h2 >value of box={box}</h2>
        <button onClick={()=>{
            console.log(inputRef);
            inputRef.current.focus();
        }}>Click</button>
        </Flex>
        
    </Flex>
)
}

export default UseRef;
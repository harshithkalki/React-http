import React, { useState } from "react";
import { User } from "./User";
import { Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

function Login() {
    const [value, changed] = User({ email: "", password: "" })
    const send = (e) => {
        alert(`${value.email} ${value.password}`)
    }
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
            <Flex direction={"column"} background={formBackground} padding={15}>
                <Heading mb={6}>Log in</Heading>


                <Input type='email' name='email' value={value.email} placeholder='Email id' onChange={changed} mb={3}></Input>

                <Input type='password' name='password' value={value.password} placeholder="Password" onChange={changed}
                    mb={3}></Input>

                <Button colorScheme="teal" mb={3} onClick={send}>Submit</Button>
                <Button onClick={toggleColorMode}>Toggle</Button>

            </Flex>

        </Flex>
    )

}

export default Login
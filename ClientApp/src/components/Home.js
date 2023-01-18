import React, {Component} from 'react';
import {Button, Flex} from "@chakra-ui/react";
import {UserProfile} from "./UserProfile";

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <Flex bgColor={"aliceblue"} width={"98vw"} height={"98vh"} marginX={"1vw"} marginY={"1vh"} rounded={"3xl"} padding={"2rem"}>
               <Flex bgColor={"gray.800"} rounded={"3xl"} padding={"2rem"} width={"100%"} height={"100%"}>
                   {/* User Profile*/}
                   <UserProfile />
                   <Button colorScheme={"teal"}>Hello World!</Button>
               </Flex> 
            </Flex>
        );
    }
}

import React, {Component} from 'react';
import {Flex} from "@chakra-ui/react";
import {UserProfile} from "./UserProfile";
import {SearchBar} from "./SearchBar";
import {SearchContext, SearchContextProvider} from "./SearchContextProvider";
import {SearchDisplay} from "./SearchDisplay";

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            displayText: 'Welcome to Weather App!',
        };
    }

    render() {
        return (
            <SearchContextProvider>
                <SearchContext.Consumer>
                    {(context) => {
                        return (
                            <Flex bgColor={"aliceblue"} width={"98vw"} height={"98vh"} marginX={"1vw"} marginY={"1vh"}
                                  rounded={"3xl"} padding={"2rem"}>
                                <Flex bgColor={"gray.800"} rounded={"3xl"} padding={"2rem"} width={"100%"}
                                      height={"100%"}
                                      flexDirection={"column"}>
                                    {/* Top Bar */}
                                    <Flex justifyContent={"space-between"} width={"100%"}>
                                        {/* User Profile*/}
                                        <UserProfile/>

                                        {/* Search Bar*/}
                                        <SearchBar/>
                                    </Flex>

                                    <SearchDisplay search={context}/>
                                </Flex>
                            </Flex>)
                    }}
                </SearchContext.Consumer>
            </SearchContextProvider>
        );
    }

}

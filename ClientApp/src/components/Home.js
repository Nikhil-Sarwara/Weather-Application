import React, {Component} from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {UserProfile} from "./UserProfile";
import {SearchBar} from "./SearchBar";
import {SearchContext, SearchContextProvider} from "./SearchContextProvider";
import {CityBox} from "./CityBox";

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

                                    {/* Main Display */}
                                    <Flex height={"100%"} width={"100%"} bgColor={"gray.700"} marginTop={"2rem"}
                                          rounded={"3xl"} overflow={"auto"}>
                                        {/* Display Text */}
                                        {context.searchQuery === "None" ? 
                                            <Text color={"white"} fontSize={"4rem"} fontWeight={"thin"} margin={"auto"}>
                                                {this.state.displayText}
                                            </Text>
                                             :
                                            (Array.isArray(context.searchResult) && context.searchResult.length > 0 ?
                                                    (<Flex>
                                                        <CityBox cities={context.searchResult}/>
                                                    </Flex>)
                                                    :
                                                    <Text color={"white"} fontSize={"2rem"} fontWeight={"thin"} margin={"auto"}>
                                                        No results found.
                                                    </Text>
                                            )
                                        }
                                    </Flex>
                                </Flex>
                            </Flex>
                        )
                    }}
                </SearchContext.Consumer>
            </SearchContextProvider>
        );
    }

}

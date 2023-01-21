import {Flex, Icon, Text} from "@chakra-ui/react";
import React, {Component} from "react";
import {MdBusiness, MdLocationOn} from "react-icons/md";

export class CityDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: props.city
        }
    }

    render() {
        const {name, region, country} = this.state.city;

        return (
            <Flex
                flexDirection="column"
                alignItems="center"
                bgColor={"gray.800"}
                overflow={"auto"}
                width={"100%"}
                p={4}
            >
                <Flex width={"100%"} flexDirection={"row"} overflow={"auto"}>
                    
                    {/*City mini detail box*/}
                    <Flex width={"25%"} bgColor={"gray.900"} padding={"1rem"} rounded={"3xl"} marginRight={"1rem"} overflow={"auto"}>
                        <Flex flexDirection={"column"} bgColor={"gray.700"} padding={"1rem"} rounded={"3xl"}>
                            <Flex flexDirection={"row"} alignItems={"center"}>
                                <Icon as={MdLocationOn} boxSize={8} color="blue.500"/>
                                <Text fontSize="2xl" fontWeight="bold" mt={2}>
                                    {name}
                                </Text>
                            </Flex>
                            <Flex flexDirection={"row"}>
                                {region && (
                                    <Flex alignItems="center" mt={1} justifyContent={"center"}>
                                        <Icon as={MdBusiness} boxSize={5} color="gray.500"/>
                                        <Text ml={2}>{region}</Text>
                                    </Flex>
                                )}
                                {country && (
                                    <Flex marginX={"0.4rem"} alignItems="center" mt={1} rounded={"full"} paddingX={"0.6rem"}
                                          paddingY={"0.1rem"} bgColor={"gray.900"}>
                                        <Text>{country}</Text>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                    </Flex>
                    
                    {/* Main Detail box*/}
                    <Flex width={"75%"}>
                        hi
                    </Flex>
                </Flex>
                
              
            </Flex>
        );
    }
}
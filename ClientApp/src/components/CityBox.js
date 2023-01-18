import {Flex, Text, VStack} from "@chakra-ui/react";
import React, {Component} from "react";
import {FaMapMarkerAlt} from "react-icons/fa";

export class CityBox extends Component {
    
    // function to handle click event of one city
    handleClick = (city) => {
        this.props.onCityClick(city);
    }

    render() {
        return(
            <Flex justifyContent="center" padding={"1rem"} overflow={"auto"}>
                <VStack spacing={4} alignItems="stretch">
                    {this.props.cities.map((city) => (
                        <Flex
                            key={city.id}
                            alignItems="center"
                            justifyContent="space-between"
                            backgroundColor="gray.600"
                            color="white"
                            width="100%"
                            padding="1rem"
                            rounded="3xl"
                            boxShadow="md"
                            onClick={() => this.handleClick(city)}
                        >
                            <FaMapMarkerAlt size={24} color="white" />
                            <VStack alignItems="start" spacing={0} flex="1" marginX={"1rem"}>
                                <Text fontSize="lg" fontWeight="bold">
                                    {city.name}
                                </Text>
                                <Text fontSize="sm">{`${city.region}, ${city.country}`}</Text>
                            </VStack>
                            <Text fontSize="sm">{`${city.lat}, ${city.lon}`}</Text>
                        </Flex>
                    ))}
                </VStack>
            </Flex>
        )
    }
}
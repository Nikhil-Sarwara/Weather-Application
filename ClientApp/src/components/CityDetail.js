import {Flex, Icon, Image, Text} from "@chakra-ui/react";
import React, {Component} from "react";
import {MdAccessTime, MdBusiness, MdLocationOn} from "react-icons/md";
import {TbWorldLatitude} from "react-icons/tb";
import {RiTimeZoneFill} from "react-icons/ri";

export class CityDetail extends Component {
    static displayName = CityDetail.name;

    constructor(props) {
        super(props);
        this.state = {
            city: props.city,
            cityWeather: null,
            loading: false
        };
    }

    componentDidMount() {
        this.populateCityDetails();
    }

    async populateCityDetails() {
        const response = await fetch('citydetail/get/' + this.state.city.url);
        const data = await response.json();
        this.setState({cityWeather: data});
    }

    render() {
        const {name, region, country} = this.state.city;
        const {cityWeather} = this.state;

        const {location, current} = cityWeather || {};

        console.log(this.state.cityWeather);

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
                    <Flex width={"25%"} bgColor={"gray.900"} padding={"1rem"} rounded={"3xl"} marginRight={"1rem"}
                          overflow={"auto"}>
                        <Flex flexDirection={"column"} bgColor={"gray.700"} padding={"1rem"} rounded={"3xl"}
                              height={"max-content"} width={"100%"}>
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
                                    <Flex marginX={"0.4rem"} alignItems="center" mt={1} rounded={"full"}
                                          paddingX={"0.6rem"}
                                          paddingY={"0.1rem"} bgColor={"gray.900"}>
                                        <Text>{country}</Text>
                                    </Flex>
                                )}
                            </Flex>
                        </Flex>
                    </Flex>

                    {/* Main Detail box*/}
                    <Flex width={"75%"} padding={"1rem"} bgColor={"gray.900"} rounded={"3xl"} overflow={"auto"}>
                        {
                            this.state.cityWeather === null ? (
                                <Flex>
                                    Still Loading ...
                                </Flex>
                            ) : (
                                <Flex>
                                    {/* Render weather details here */}
                                    {/* Latitude and Longitude */}
                                    <Flex flexDirection="row" alignItems="center">
                                        {/* Location Details */}
                                        <Flex flexDirection="column" alignItems="center" margin={"0.5rem"}>
                                            <Flex color={"white"} bgColor={"gray.700"} margin={"0.5rem"}
                                                  padding={"1rem"} rounded={"3xl"}
                                                  fontSize={"large"}>
                                                <Icon as={TbWorldLatitude} boxSize={6} mr={2}/>
                                                <Text fontWeight={"bold"}>{location.lat} | {location.lon}</Text>
                                            </Flex>
                                            <Flex margin={"0.5rem"} color={"white"} bgColor={"gray.700"}
                                                  padding={"1rem"} rounded={"3xl"}>
                                                <Icon as={RiTimeZoneFill} boxSize={6} mr={2}/>
                                                <Text>{location.tzId}</Text>
                                            </Flex>

                                            <Flex alignItems="center" margin={"0.5rem"} color={"white"}
                                                  bgColor={"gray.700"} padding={"1rem"} rounded={"3xl"}>
                                                <Icon as={MdAccessTime} boxSize={6} mr={2}/>
                                                <Text>{location.localtime}</Text>
                                            </Flex>
                                        </Flex>

                                        {/* Current Weather Details */}
                                        <Flex margin={"0.5rem"} flexDirection="column" alignItems="center"
                                              backgroundImage="url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')"
                                              padding={"1rem"} rounded={"3xl"}>
                                            <Text fontSize="2xl" fontWeight="bold">Current Weather</Text>
                                            <Flex alignItems="center">
                                                <Image src={current.condition.icon} alt={current.condition.text}
                                                       boxSize="2rem" mr={2}/>
                                                <Text>{current.condition.text}</Text>
                                            </Flex>
                                            
                                            <Flex flexDirection={"row"} gap={"1rem"} padding={"0.5rem"}>
                                            {/* Display Temprature*/}
                                            <Flex padding={"1rem"} rounded={"3xl"} color={"white"}
                                                  bgColor="rgba(255, 255, 255, 0.15)" backdropFilter={"blur(5px)"}>
                                                <Text>{current.tempC}°C ({current.tempF}°F)</Text>
                                            </Flex>

                                            {/* Display Wind*/}
                                            <Flex padding={"1rem"} margin={"0.5rem"} rounded={"3xl"} color={"white"}
                                                  bgColor="rgba(255, 255, 255, 0.15)" backdropFilter={"blur(5px)"}>

                                                <Text>Wind: {current.windDir} {current.windMph} mph
                                                    / {current.windKph} km/h</Text>
                                            </Flex>
                                        </Flex>
                                            
                                            <Flex flexDirection={"row"} gap={"1rem"} width={"100%"} padding={"0.5rem"}>
                                                {/* Display Pressure*/}
                                                <Flex alignItems="center" margin={"0.5rem"} color={"white"}
                                                      bgColor="rgba(255, 255, 255, 0.15)" backdropFilter={"blur(5px)"}
                                                      padding={"1rem"} rounded={"3xl"}>
                                                    <Text>Pressure: {current.pressureIn} in</Text>
                                                </Flex>

                                                {/* Display Humidity*/}
                                                <Flex padding={"1rem"} rounded={"3xl"} color={"white"}
                                                      bgColor="rgba(255, 255, 255, 0.15)" backdropFilter={"blur(5px)"}>
                                                    <Text>Humidity: {current.humidity}%</Text>
                                                </Flex> 
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            )
                        }
                    </Flex>
                </Flex>
            </Flex>
        );
    }
}

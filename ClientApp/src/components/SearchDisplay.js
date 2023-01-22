import {Component} from "react";
import {Flex, Text} from "@chakra-ui/react";
import {CityBox} from "./CityBox";
import {CityDetail} from "./CityDetail";

export class SearchDisplay extends Component {

    static displayName = SearchDisplay.name;

    constructor(props) {
        super(props);
        this.state = {displayText: "Welcome to Weather App!", onClickCity: null, displayCleanUI: false};
    }

    setCity = (city) => {
        this.setState({displayText: "None", onClickCity: city, displayCleanUI: true});
    }

    render() {
        return (
            <Flex height={"100%"} width={"100%"} bgColor={"gray.700"} marginTop={"2rem"}
                  rounded={"3xl"} overflow={"auto"}>
                {this.state.displayCleanUI ? (
                        <Flex color={"white"} width={"100%"} height={"100%"}>
                            <CityDetail city={this.state.onClickCity}/> 
                        </Flex>
                    ) :
                    (
                        <Flex>
                            {this.props.search.searchQuery === "None" ?
                                <Text color={"white"} fontSize={"4rem"} fontWeight={"thin"} margin={"auto"}>
                                    {this.state.displayText}
                                </Text>
                                :
                                (Array.isArray(this.props.search.searchResult) && this.props.search.searchResult.length > 0 ?
                                        (<Flex>
                                            <CityBox cities={this.props.search.searchResult}
                                                     onCityClick={this.setCity}/>
                                        </Flex>)
                                        :
                                        <Text color={"white"} fontSize={"2rem"} fontWeight={"thin"} margin={"auto"}>
                                            No results found.
                                        </Text>
                                )
                            }
                        </Flex>
                    )
                }
            </Flex>
        );
    }
}
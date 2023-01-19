import React, { Component } from "react";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { SearchContext } from "./SearchContextProvider";

export class SearchBar extends Component {
    static displayName = SearchBar.name;
    static contextType = SearchContext;

    constructor(props) {
        super(props);
        this.state = {
            searchResult: null,
            loading: true,
            searchQuery: ""
        };
    }

    render() {
        
        return (
            <Flex color={"white"} height={"100%"}>
                <Flex maxHeight={"max-content"} bgColor={"gray.700"} rounded={"full"}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Search2Icon />
                        </InputLeftElement>
                        <Input onChange={this.handleInputChange} variant='outline' borderColor={"gray.700"} rounded={"full"} placeholder='Search city or postcode' />
                    </InputGroup>
                </Flex>
            </Flex>
        );
    }

    handleInputChange = (e) => {
        const { setSearchQuery } = this.context;
        const query = e.target.value;
        setSearchQuery(query);
        this.setState({ searchResult: null, loading: true, searchQuery: query }); 
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.searchQuery !== prevState.searchQuery && this.state.searchQuery !== "" && this.state.searchQuery !== null && this.state.searchQuery !== undefined && this.state.searchQuery.length >= 3) {
            // Wait for 1 second
            setTimeout(() => {
                this.populateSearchResult();
            }, 1000);
        }
    }

    async populateSearchResult() {
        const response = await fetch('city/get/' + this.state.searchQuery.trim().toLowerCase());
        const data = await response.json();
        
        this.context.setSearchResult(data);
        
        // Check if received empty response array of there is any city in it
        if(Array.isArray(data) && data.length === 0) {
            this.context.setNotFound(true);
            this.setState({ searchResult: null, loading: false });
        }

        if (data.name) {
            this.context.setNotFound(false);
            this.setState({ searchResult: data, loading: false });
        } else {
            this.setState({ searchResult: null, loading: false });
        }
    }
}

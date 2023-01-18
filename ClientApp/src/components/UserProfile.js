import React, {Component} from "react";
import {Flex, Image, Text} from "@chakra-ui/react";

export class UserProfile extends Component {

    static displayName = UserProfile.name;

    constructor(props) {
        super(props);
        this.state = {currentUser: null};
    }

    render() {
        return (
            <Flex rounded={"3xl"} padding={"1rem"} bgColor={"gray.100"} height={"max-content"}>
                {/* User Selection */}

                {/* User Icon*/}
                <Image src={this.state.currentUser && this.state.currentUser.iconUrl} width={"2rem"} height={"2rem"} margin={"auto"} rounded={"3xl"}></Image>
                
                <Flex flexDirection={"column"}>
                    {/* User Name*/}
                    <Flex flexDirection={"Row"}>
                        <Text fontSize={"smaller"} marginX={"1rem"}>
                            Hi !
                        </Text>
                        <Text fontSize={"smaller"}>
                            { this.state.currentUser && <p>{this.state.currentUser.name}</p>}
                        </Text>
                    </Flex>
                   
                    {/* Date Time*/}
                    <Text fontSize={"large"} marginLeft={"1rem"}>
                        {
                            //     get current dateitme
                            new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date())
                        }
                    </Text> 
                </Flex>
              
            </Flex>
        );
    }

    componentDidMount() {
        this.populateUserProfile();
    }

    async populateUserProfile() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({currentUser: data});
    }
}
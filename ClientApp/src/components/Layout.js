import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {Flex} from "@chakra-ui/react";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <Flex>
        <Container tag="main">
          {this.props.children}
        </Container>
      </Flex>
    );
  }
}

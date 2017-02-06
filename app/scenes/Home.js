import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base'

import Custom from '../themes/Custom'

export default class Home extends Component {
  render() {
    return (
      <Container theme={Custom}>
        <Header>
          <Title>React Native</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name='ios-menu' />
          </Button>
        </Header>

        <Content>
          <Text> Home Page</Text>
        </Content>

        <Footer >
          <FooterTab>
            <Button>
              <Badge>2</Badge>
              Apps
              <Icon name='ios-apps-outline' />
            </Button>
            <Button>
              Camera
              <Icon name='ios-camera-outline' />
            </Button>
            <Button active>
              Navigate
              <Icon name='ios-compass' />
            </Button>
            <Button>
              Contact
              <Icon name='ios-contact-outline' />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
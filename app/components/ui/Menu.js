import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  View,
  Button,
  Icon,
  Title
} from 'native-base'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let list = [{
      title: "Match",
      onPress: () => {
        this.props.navigator.replace("Match")
      }
    }, {
      title: "History",
      onPress: () => {
        this.props.navigator.replace("History")
      }
    }]
    return (
      <Container style={styles.container} theme={this.props.theme}>
        <Header>
          <Title>Menu</Title>
        </Header>
        <View>
          <List dataArray={list} renderRow={(item) =>
            <ListItem button onPress={item.onPress.bind(this)}>
              <Text style={styles.content}> {item.title} </Text>
            </ListItem>
          } />
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#000'
  },
  content: {
    color: '#FFF'
  }
})
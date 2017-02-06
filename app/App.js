import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import {
  PropTypes,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import ControlPanel from './components/ui/ControlPanel'
import Menu from './components/ui/Menu'
import Home from './scenes/Home'

export default class App extends Component {

  closeDrawer() {
    this._drawer.close()
  }

  openDrawer() {
    this._drawer.open()
  }

  render() {
    console.log("App Component")

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        type="overlay"
        content={<Menu />}
        openDrawerOffset={100}
        closedDrawerOffset={0}
        panOpenMask={0.1}
        panCloseMask={0.9}
        >
        <Home openDrawer={this.openDrawer.bind(this)}/>
      </Drawer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  welcome: {
    color: '#777'
  }
})

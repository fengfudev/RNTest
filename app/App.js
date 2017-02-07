import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import {
  StyleSheet,
  Navigator
} from 'react-native'

import ControlPanel from './components/ui/ControlPanel'
import Menu from './components/ui/Menu'
import Home from './scenes/Home'
import Router from './components/routes/Router'
import Routes from './components/routes/Routes'

import theme from './themes/Custom'

import appStore from './stores/AppStore'
import fireStore from './stores/FireStore'

export default class App extends Component {

  constructor() {
    super()
    let commonPayload = {
      theme,
      appStore,
      fireStore
    }
    this.router = new Router(Routes, 'home', commonPayload)
  }

  closeDrawer() {
    this._drawer.close()
  }

  openDrawer() {
    this._drawer.open()
  }

  configureScene() {
    return Navigator.SceneConfigs.PushFromRight
  }

  renderScene(route, navigator) {
    let payload = {
      store: null
    }
    route.payload = Object.assign({}, route.payload, payload)
    return this.router.routing(route, navigator)
    // return <route.component openDrawer={this.openDrawer.bind(this)} navigator={navigator}/>
  }

  render() {
    console.log("App Component")

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        type="overlay"
        content={<Menu navigator={this._navigator} />}
        openDrawerOffset={100}
        closedDrawerOffset={0}
        panOpenMask={0.1}
        panCloseMask={0.9}
      >

        <Navigator
          ref={(ref) => this._navigator = ref}
          configureScene={this.configureScene.bind(this)}
          renderScene={this.renderScene.bind(this)}
          initialRoute={{ path: "home" }}
          >
        </Navigator>
        {/*<Home openDrawer={this.openDrawer.bind(this)} />*/}

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

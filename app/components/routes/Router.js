import React from 'react'
import Routes from './Routes'

function RouteException(message) {
  this.message = message;
  this.name = 'RouteException';
}

class Router {

  constructor(routes, notFoundRoute = null, commonPayload = {}) {
    this.routes = routes.map(route => {
      route.payload = Object.assign({}, commonPayload, route.payload)
      return route
    })

    this.notFoundRoute = notFoundRoute
  }


  routing(route, navigator) {
    let currentRoute = this.routes.filter(r => r.path === route.path)

    if (!currentRoute) {
      if (this.notFoundRoute) currentRoute = this.notFoundRoute
      else throw new RouteException(`Route: ${route.path} not found`);
    }
    else currentRoute = currentRoute[0]

    return <currentRoute.component {...currentRoute.payload} {...route.payload} navigator={navigator} />
  }
}

export default Router

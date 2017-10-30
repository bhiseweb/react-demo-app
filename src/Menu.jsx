import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import AppMain from './appmain/AppMain.jsx'
import Users from './users/Users'
import Posts from './post/Posts'
import Albums from './albums/Albums'
import Photos from './photos/Photos'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class Menu extends Component {
  render() {
    return (
      <menu>
        <Switch>
          <Route path='/Home'  component={AppMain} />
          <Route path='/Users'  component={Users} />
          <Route path='/Posts'  component={Posts} />
          <Route path='/Albums' component={Albums} />
          <Route path='/Photos' component={Photos} />
        </Switch>
      </menu>
    )
  }
}

export default Menu;

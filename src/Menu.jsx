import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import AppMain from './containers/AppMain';
import Users from './containers/Users';
import Posts from './containers/Posts';
import Albums from './containers/Albums';
import Photos from './containers/Photos';

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

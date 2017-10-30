import React from 'react';
import ShowList from './ShowList';

class AppList extends React.Component {

  render() {
    return (
      <div className="container col-sm-12 ">
        <div className="container-fluid">
          <br />
          <div>

            <ShowList showTask={this.props.showTask} />

          </div>
        </div>
      </div>
    );
  }
}

export default AppList;
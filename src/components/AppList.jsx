import React from 'react';
import ShowList from '../components/ShowList';

class AppList extends React.Component {

  render() {
    return (
      <div className="container col-sm-12 ">
        <div className="container-fluid">
          <br />
          <div>
            <ShowList task={this.props.task} deleteItem={this.props.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}

export default AppList;
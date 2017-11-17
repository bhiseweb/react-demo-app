import React, { Component } from 'react';

class MoreDetails extends Component {
  render() {
    return (
      <div>
        <div className="modal" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{this.props.modalusers.id}</h4>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">{this.props.modalusers.name}</h4>
                <h4>Username : {this.props.modalusers.username}</h4>
                <h4>Email ID : {this.props.modalusers.email}</h4>
                <h4>Address :</h4>
                  <p>Street : {this.props.modalusers.address.street}</p>
                  <p>Suite : {this.props.modalusers.address.suite}</p>
                  <p>City : {this.props.modalusers.address.city}</p>
                  <p>Zipcode : {this.props.modalusers.address.zipcode}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoreDetails;
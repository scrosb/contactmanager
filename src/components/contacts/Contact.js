import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './contact.css'; //import a css file if needed

class Contact extends Component {
  //using this in a function means it applies to this class

  state = {
    showContactInfo: false
  };

  // onShowClick = e => {
  //   //it doesn't know what 'this' is use .bind(this) on the show click, or use an arrow function to not
  //   //have to do any binding
  //   //use set state, do not mutate state
  //   //!this.state.showContactInfo will toggle the state
  //   // this.setState({ showContactInfo: !this.state.showContactInfo });
  // };

  onDeleteClick = async (id, dispatch) => {
    console.log(id);

    //make a delete request
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }

    //added to props, so it needs in the Contact.propTypes
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3 ">
              <h4>
                {name}{' '}
                <i
                  onClick={() => {
                    this.setState({
                      showContactInfo: !this.state.showContactInfo
                    });
                  }}
                  className="fas fa-sort-down"
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {/* Add a condition for the unordered list to drop down and show the info */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

//validating properties
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;

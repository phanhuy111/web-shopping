import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { firebase } from './../Firebase';
import * as routes from './../Constant/routes';


const withAuthorization = (condition) => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          this.props.history.push(routes.HOMEPAGE);
        }
      });
    }

    render() {
      console.log(this.context.authUser)
      return 
          this.context.authUser ? <Component /> : null;
           
    }
  }

  WithAuthorization.contextTypes = {
    authUser: PropTypes.object,
  };

  return withRouter(WithAuthorization);
}

export default withAuthorization;
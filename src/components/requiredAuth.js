import React, { Component } from 'react';
import { connect } from 'react-redux';

// HOC boilerplate
export default ChildComponent => {
  class ComposedComponent extends Component {
    // unique code for other HOC
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }

    //  HOC boilerplate
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

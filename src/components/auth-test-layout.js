import React, { Component } from 'react';
import { connect } from 'react-redux';

class NavBar extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link>sign out</Link>
          <Link>watchlist</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link>sign in</Link>
          <Link>sign up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Link to="/auth">auth</Link>
        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavBar);

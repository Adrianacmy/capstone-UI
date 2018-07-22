import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../actions';

import { Row, Input } from 'react-materialize';

class Signup extends Component {
  onSubmit = formProps => {
    console.log(formProps);
    this.props.signup(formProps);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Row>
          <Field
            name="email"
            type="text"
            component="input"
            label="email"
            s={12}
            autoCoplete="none"
          />
          <Field
            name="password"
            type="password"
            component="input"
            label="password"
            s={12}
            autoCoplete="none"
          />
        </Row>
        <button type="submit">signup</button>
      </form>
    );
  }
}

// compose: apply mutiple higher order components to signle component with better syntax

export default compose(
  connect(
    null,
    actions.signup
  ),
  reduxForm({ form: 'signup' })
)(Signup);

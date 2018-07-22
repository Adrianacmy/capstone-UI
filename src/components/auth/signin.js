import React, {
  Component
} from '../../../../../../.cache/typescript/2.9/node_modules/@types/react';
import {
  reduxForm,
  Field
} from '../../../../../../.cache/typescript/2.9/node_modules/@types/redux-form';
import { connect } from '../../../../../../.cache/typescript/2.9/node_modules/@types/react-redux';
import { compose } from '../../../../../../.cache/typescript/2.9/node_modules/redux';

import * as actions from '../../actions';

import { Row, Input } from 'react-materialize';

class Signin extends Component {
  onSubmit = formProps => {
    console.log(formProps);
    this.props.Signin(formProps, () => {
      this.props.history.push('/');
    });
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
        {this.props.errorMessage}
        <button type="submit">Signin</button>
      </form>
    );
  }
}

// compose: apply mutiple higher order components to signle component with better syntax

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'Signin' })
)(Signin);

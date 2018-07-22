import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <Field name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <Field name="password" type="password" component="input" />
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({ form: Signup })(Signup);

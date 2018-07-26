import React from 'react';
import AuthForm from './AuthForm';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    );
  }
}

LoginForm.propTypes = {};

export default LoginForm;

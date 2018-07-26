import React from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import AuthForm from './AuthForm';
import mutation from '../mutations/Login';
import query from '../queries/CurrentUser';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: []
    } 
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.data.loading && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error => error.message);
      this.setState({ errors });
    });
  }

  render() {
    return(
      <div>
        <h3>Login</h3>
        <AuthForm 
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

LoginForm.propTypes = {};

export default graphql(mutation)(
  graphql(query)(LoginForm)
);
    
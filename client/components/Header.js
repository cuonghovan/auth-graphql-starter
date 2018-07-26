import React from 'react';

import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return(
      <div>Header</div>
    );
  }
}

Header.propTypes = {};

export default graphql(query)(Header);

import React from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import query from '../queries/CurrentUser';

class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  renderButtons() {
    const { loading, user } = this.props.data;

    if (loading) {
        return (<div />)
    }

    if (user) {
      return (<div>Logout</div>)
    } else {
      return (
          <div>
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Login</Link></li>
          </div>
      )
    }
  }

  render() {
    return(
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo left'>Home</Link>
          <ul className='right'>
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {};

export default graphql(query)(Header);

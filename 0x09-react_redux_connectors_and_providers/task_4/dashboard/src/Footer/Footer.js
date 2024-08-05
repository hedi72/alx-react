import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';


export const Footer = ({ user }) => {
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      {user.isLoggedIn && (
        // eslint-disable-next-line
        <p><a href='#'>Contact us</a></p>
      )}
    </div>
  )
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
}

// export default Footer;
export default connect(mapStateToProps, null)(Footer);
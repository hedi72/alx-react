import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";
import { logout } from '../actions/uiActionCreators';


const Header = () => {
  const { user, logout } = this.props;
  return (
    <>
      <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="logo" />
          <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
                <section className={css(styles.welcome)} id="logoutSection">
                    Welcome<strong> {user.email} </strong>
                    <em>
                      {/* eslint-disable-next-line */}
                        <a href="#" onClick={logout}>
                            (logout)
                        </a>
                    </em>
                </section>
            )}
    </>
  )
}

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #c1384c',
    color: '#c1384c',
  },

  AppLogo: {
    width: '200px',
    height: 'auto',
  },
  welcome: {
    marginTop: '20px',
    marginLeft: '20px'
}
})

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout,
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default Header;
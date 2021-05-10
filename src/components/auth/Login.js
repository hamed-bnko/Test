import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../redux/auth/actions";

const Login = ({ login, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="input-field ">
          <label className="white-text" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="validate"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="input-field">
          <label className="white-text" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="validate"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            id="password"
          />
        </div>
        <input
          type="submit"
          value=" login"
          className="btn btn-large btn-extended grey lighten-4 black-text"
        />
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { login })(Login);

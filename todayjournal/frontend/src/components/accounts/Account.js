import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Entries from "../journalentry/Entries";

export class Account extends Component {
    static propTypes = {
        isAuthenticated: PropTypes.bool,
    };
  
    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to='/' />
        }

        return (
            <Entries />

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Account);

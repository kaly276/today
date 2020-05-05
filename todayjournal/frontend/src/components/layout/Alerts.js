import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if(error !== prevProps.error) {
            if (error.msg.title) {
                alert.error(`Title: ${error.msg.title.join()}`);
            }
            if (error.msg.message) {
                alert.error(`Message: ${error.msg.message.join()}`);
            }
        }

        if (message !== prevProps.message) {
            if (message.deleteEntry) {
                alert.success(message.deleteEntry);
            }
            if (message.addEntry) {
                alert.success(message.addEntry);
            }
        }
    };

    render() {
        return <Fragment />;
    };
};

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));

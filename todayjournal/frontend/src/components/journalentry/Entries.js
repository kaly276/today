import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEntries, deleteEntries } from "../../actions/journalentry";

export class Entries extends Component {
    static propTypes = {
        journalentry: PropTypes.array.isRequired,
        getEntries: PropTypes.func.isRequired,
        deleteEntries: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getEntries();
    }

    render() {
        if (!this.props.isAuthenticated) {
            return (
                <Fragment></Fragment>
            );
        }
        return (
            <Fragment>
                <h2>Entries</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Title</th>
                    <th>Message</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.journalentry.map((entry) => (
                    <tr key={entry.id}>
                        <td>{entry.title}</td>
                        <td>{entry.message}</td>
                        <td>
                        <button
                            onClick={this.props.deleteEntries.bind(this, entry.id)}
                            className="btn btn-danger btn-sm"
                        >
                            Delete
                        </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    journalentry: state.journalentry.journalentry,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getEntries, deleteEntries })(Entries);

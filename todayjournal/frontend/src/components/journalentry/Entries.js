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
        console.log("ENTRIES", this.props.journalentry);
        return (
            <Fragment>
                <h2>Entries</h2>
                {this.props.journalentry.map((entry) => (
                <div className="mt-4 mb-4" key={entry.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{entry.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Date Created</h6>
                            <p className="card-text">{entry.message}</p>
                            <button
                                onClick={this.props.deleteEntries.bind(this, entry.id)}
                                className="btn btn-danger btn-sm"
                            >
                                Delete
                            </button>
                            <button 
                                onClick={() => console.log("EDITED BITCH")}
                                className="btn btn-link btn-sm ml-3 mr-3"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    journalentry: state.journalentry.journalentry,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getEntries, deleteEntries })(Entries);

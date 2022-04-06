import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEntries, deleteEntries } from "../../actions/journalentry";
import EditForm from "./EditForm";

export class Entries extends Component {
    static propTypes = {
        journalentry: PropTypes.array.isRequired,
        getEntries: PropTypes.func.isRequired,
        deleteEntries: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    componentDidMount() {
        this.props.getEntries();
    };

    onEditClick = (id, title, message) => {
        this.child.onModalOpen(id, title, message);
    };

    onSubmitClick = () => {
        this.child.onSubmitClick();
    }

    onToneAnalyzeClick = (message) => {
        console.log(message);        
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
                                onClick={() => this.onEditClick(entry.id, entry.title, entry.message)}
                                className="btn btn-link btn-sm ml-3 mr-3"
                                data-toggle="modal"
                                data-target="#editModal"
                            >
                                Edit    
                            </button>
                            <button
                                onClick={() => this.onToneAnalyzeClick(entry.message)}
                                className="btn btn-link btn-sm ml-3 mr-3"
                                data-toggle="toast"
                                data-target="liveToast"
                                >
                                Tone Analyze
                            </button>
                            
                        </div>
                    </div>
                </div>
                ))}

                

                <div className="modal fade" id="editModal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalScrollableTitle">Edit entry</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <EditForm childRef={ ref => (this.child = ref)} />
                            </div>
                            <div className="modal-footer">
                                <button 
                                    onClick={() => this.child.onSubmitClick()}
                                    type="button" 
                                    className="btn btn-primary" 
                                    data-dismiss="modal"
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    journalentry: state.journalentry.journalentry,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getEntries, deleteEntries })(Entries);

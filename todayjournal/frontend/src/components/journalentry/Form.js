import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEntries } from '../../actions/journalentry';

export class Form extends Component {
    state = {
        title: '',
        message: ''
    };

    static propTypes = {
        addEntries: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { title, message } = this.state;
        const journalentry = { title, message };
        this.props.addEntries(journalentry);
        this.setState({
            title: '',
            message: ''
        });
    };

    render() {
        const { title, message } = this.state;
        return (
            <div className='card card-body mt-4 mb-4'>
                <h2>Add Entry</h2>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            className='form-control'
                            type='text'
                            name='title'
                            onChange={this.onChange}
                            value={title}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea
                            className='form-control'
                            type='text'
                            name='message'
                            onChange={this.onChange}
                            value={message}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Done</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addEntries })(Form);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editEntries } from '../../actions/journalentry';

export class EditForm extends Component {
    state = {
        title: '',
        message: ''
    };

    static propTypes = {
        editEntries: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { childRef } = this.props;
        childRef(this);
    };

    onModalOpen = (newTitle, newMessage) => {
        this.setState({
        title: newTitle,
        message: newMessage});
        console.log(newTitle, newMessage);
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { title, message } = this.state;
        const journalentry = { title, message };
        this.props.editEntries(journalentry);
        this.setState({
            title: '',
            message: ''
        });
    };

    render() {
        const { title, message } = this.state;
        return (
            <div>                
                <form>
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
                        <button type='submit' className='btn btn-link'>Done</button>
                    </div>
                </form>
            </div>
        )
    }
};


export default connect(null, { editEntries })(EditForm);

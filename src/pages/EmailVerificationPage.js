import React from 'react';
import axios from 'axios';

class EmailVerificationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: true,
        }
    }

    componentDidMount() { 
        axios.post('http://localhost:3002/confirmAccount', { token: this.props.match.params.token })
            .then(() => {
                this.setState({ success: true });

            })
            .catch(() => {
                this.setState({ success: false });
            });
    }

    render() { 
        return (
            <>
                {this.state.success ?
                    <h2>Your email was verified</h2> :
                    <h2>Some problem occured during account verification</h2>
                }
            </>
        );
    }
    
};

export default EmailVerificationPage;
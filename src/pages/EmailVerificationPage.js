import React from 'react';
import axios from 'axios';

import ThanksModal from '../components/ThanksModal';

import muskernack from '../assets/forms/3-muskernack-smaller-size.png';

class EmailVerificationPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            success: true,
        }
    }

    componentDidMount() {
        axios.post(`${process.env.REACT_APP_ProdUrl}/confirmAccount`, { token: this.props.match.params.token })
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
                    <>
                        <ThanksModal verifying={true} img={muskernack} title="Thank you for verifying your account, now go play Hash Rush" text={false} />
                    </>
                    :
                    <h2>Some problem occured during account verification</h2>
                }
            </>
        );
    }

};

export default EmailVerificationPage;
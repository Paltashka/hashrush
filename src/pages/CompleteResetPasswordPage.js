import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

import Input from '../components/LoginModal/Input';
import Button from '../components/Button';

import '../components/CreateAccount/index.scss';

const CompleteResetPasswordPage = (props) => {
    const history = useHistory();
    const alert = useAlert();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, newPassword, newRepeatedPassword } = e.target;

        if (!newPassword.value || !newRepeatedPassword.value || newPassword.value !== newRepeatedPassword.value) {
            alert.show('Some fields are invalid', { type: 'error' });

            return;
        };

        const body = JSON.stringify({
            emailHash: props.location.search.split('?hash=')[1],
            email: email.value,
            newPassword: newPassword.value
        });

        axios.post(`${process.env.REACT_APP_ProdUrl}/completeResetPassword`, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                history.push('/login');
            })
            .catch(err => {
                alert.show(err.response.data.Message, { type: 'error' });
                console.log(err);
                return err;
            });
    };

    return (
            <div className="modal register">
                <div className="register__content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 className="modal__heading">Reset password</h1>
                    <form onSubmit={handleSubmit}>
                        <Input id="email" type="text" placeholder="Email address" />
                        <Input id="newPassword" type="text" placeholder="New password" />
                        <Input id="newRepeatedPassword" type="text" placeholder="Repeat new password" />
                        <Button text="submit" classPosition="modal__button" />
                    </form>
                </div>
            </div>
    );
};

export default CompleteResetPasswordPage;
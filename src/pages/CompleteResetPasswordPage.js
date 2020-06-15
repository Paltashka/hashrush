import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Input from '../components/LoginModal/Input';
import Button from '../components/Button';

const CompleteResetPasswordPage = (props) => {
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const { email, newPassword, newRepeatedPassword } = e.target;

        if (!newPassword.value || !newRepeatedPassword.value || newPassword.value !== newRepeatedPassword.value) return;

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
                console.log(err);
                return err;
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Input id="email" type="text" placeholder="Email address" />
                <Input id="newPassword" type="text" placeholder="New password" />
                <Input id="newRepeatedPassword" type="text" placeholder="Repeat new password" />
                <Button text="submit" />
            </form>
        </>
    );
};

export default CompleteResetPasswordPage;
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = (props) => {

    const [ username, setUsername ] = useState('');

    const loginUser = (e) => {
        e.preventDefault();
        redirectIfAuthenticated();
    }

    const redirectIfAuthenticated = () => {
        localStorage.setItem("userLoggedIn", username);
        props.history.push("/home");
    }

    return (
        <div>
            <form 
                onSubmit = { loginUser }
            >
                <input 
                    type = "text"
                    placeholder = "Username"
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <input 
                    type = "password"
                    placeholder = "Password"
                />
                <input 
                    type = "submit"
                    value = "LOGIN"
                />
            </form>
        </div>
    );
}

export default withRouter(LoginForm);
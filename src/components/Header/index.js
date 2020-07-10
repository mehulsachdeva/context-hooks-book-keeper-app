import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {

    const userLoggedIn = localStorage.getItem("userLoggedIn");

    const logoutUser = () => {
        clearLocalStorage();
    }

    const clearLocalStorage = () => {
        localStorage.removeItem("userLoggedIn");
        localStorage.removeItem("books");
        props.history.push("/");
    }

    return (
        <div>
            {
                userLoggedIn && (
                    <div 
                        onClick = { logoutUser }
                    >
                        Logout
                    </div>
                )
            }
        </div>
    );
}

export default withRouter(Header);
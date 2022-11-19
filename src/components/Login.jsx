import React from 'react';
import "/home/jes/serviz-admin/src/scss/components/_login.scss";


export const Login = () => {
    return (
        <div className="Login">
            <div className="formWrapper">
                <span className="logo">SERVIZ</span>
                <span className="title">Login</span>
                <form>
                    <input type="email" action="" placeholder='Email'></input>
                    <input type="password" action="" placeholder='Password'></input>

                    <button>Login</button>
                </form>

            </div>
        </div>
    )
}
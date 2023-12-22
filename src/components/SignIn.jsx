import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import userInst from '../services/user';
import { ColorRing } from 'react-loader-spinner';

function SignIn() {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true); 

        const user = await userInst.signIn(loginForm, setMsg);

        setLoading(false);

        setLoginForm({
            email: '',
            password: ''
        });

        if (!user) {
            sessionStorage.removeItem('loggedInUser');
            setMsg('Entered a Wrong Email or Password');
        } else {
            navigate('/');
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h1>Login</h1>
                <div>
                    <input
                        type='email'
                        placeholder='Enter your Email'
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='password'
                        placeholder='Enter your Password'
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required
                    />
                </div>
                {
                    <h3>{msg}</h3>
                }
                
                {loading && (
                    <div id='ring'>
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#abbd81', '#f8b26a', '#849b87', '#e15b64', '#f47e60']}
                        />
                    </div>
                )}
               
                <div>
                    <button type='submit'>LOGIN</button>
                    <h3><Link to='/emailSend'>Reset Password</Link></h3>
                </div>

                <h2>
                    New User ? <Link to='/register'>REGISTER</Link>
                </h2>
            </form>
        </div>
    );
}

export default SignIn;

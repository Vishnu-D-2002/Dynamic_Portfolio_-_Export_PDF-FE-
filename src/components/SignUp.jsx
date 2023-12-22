import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import userInst from '../services/user';
import { ColorRing } from 'react-loader-spinner';

function SignUp() {
    const [registerForm, setRegisterForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleForm = async (e) => {
        e.preventDefault();

        setLoading(true); 

        await userInst.signUp(registerForm,setMsg);
        
        setLoading(false);
        
        setRegisterForm({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

    };

    return (
        <div>
            <form onSubmit={handleForm}>
                <h1>Register </h1>
                <div>
                    <input
                        type='text'
                        placeholder='Enter your First Name'
                        value={registerForm.firstName}
                        onChange={(e) => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='text'
                        placeholder='Enter your Last Name'
                        value={registerForm.lastName}
                        onChange={(e) => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='email'
                        placeholder='Enter your Email Id'
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <input
                        type='password'
                        placeholder='Enter your Password'
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        required
                    />
                </div>
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
                {
                    <h3>{ msg }</h3>
                }
                <div>
                    <button type='submit'>REGISTER</button>
                </div> 

                <h2>Already Registered ? <Link to='/login'>LOGIN</Link></h2>
            </form>
        </div>
    );
}

export default SignUp;

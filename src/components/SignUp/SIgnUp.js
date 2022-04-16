
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
const SIgnUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your two password didn't match")
        }
    }
    return (
        <div className='container'>
            <div className='main mt-1'>
                <form onSubmit={handleCreateUser} className='form shadow-sm'>

                    <h2 className='text-center my-3'>Sign Up Page</h2>
                    <div className="mb-3 ">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input onBlur={handleEmailBlur} type="email" className="form-control" required />

                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" className="form-control" required />
                    </div>

                    <input type="submit" className="btn w-100 btn-color" value='Signup' />
                    <div className='form shadow-sm'>

                    </div>
                    <p className='form-link mt-2 text-center mb-3'>
                        Already have an Account? <Link to='/login' className='new-user'>Login</Link>
                        <p className='my-3 text-center text-danger '>{error}</p>
                    </p>
                    <small className='d-flex justify-content-center mb-3'>
                        ____________ or  ____________
                    </small>

                    <Link to='/' className='sign-in-google'>
                        <img className='google-btn mx-2 ' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        Continue with Google
                    </Link>
                </form>

            </div>
        </div>
    );
};

export default SIgnUp;
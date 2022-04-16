
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>


            <div className='main mt-5'>
                <form className='form shadow-sm'>
                    <h2 className='text-center my-3'>Login Page</h2>

                    <div className="mb-3 ">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" required />
                    </div>

                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" required />
                    </div>

                    <input type="submit" className="btn w-100 btn-color" value='Login' required />
                    <p className='form-link mt-2 text-center mb-3'>
                        New to Ema-johon? <Link to='/signup' className='new-user'>Create New Account</Link>
                    </p>
                    <small className='d-flex justify-content-center mb-3'>
                        ____________ or  ____________
                    </small>

                    <Link to='/' className='sign-in-google'>
                        <img className='google-btn mx-2 ' src="https://www.freepnglogos.com/uploads/google-logo-pnggoogle-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" alt="" />
                        Continue with Google
                    </Link>
                </form>

            </div>
        </div>

    );
};

export default Login;
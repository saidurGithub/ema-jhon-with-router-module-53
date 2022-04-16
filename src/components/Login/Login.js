
import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>


            <div className='main'>
                <form className='form'>
                    <h2 className='text-center my-3'>Login Page</h2>
                    <div className="mb-3 w-50">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" w-50 id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 w-50">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>

    );
};

export default Login;
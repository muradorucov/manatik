import axios from 'axios'
import React, { useState } from 'react'

function Login() {
    const [isLogin, setIsLogin] = useState(true)
    const [loginForm, setLoginForm] = useState({
        loginName: "",
        password: "",
        rePassword: ""
    })
    const [registerForm, setRegisterForm] = useState({
        fullName: "",
        userName: "",
        userEmail: "",
        birthdate: "",
        // avatar: "",
        password: "",
        rePassword: "",

    })
    let api = import.meta.env.VITE_USERS_API


    function userSubmit(e) {
        e.preventDefault()
        if (isLogin) {
            axios.get(api)
                .then(res => {
                    console.log(formData);
                    console.log(res.data);
                })
        } else {
            axios.post(api, registerForm)
                .then(res => {
                    console.log(res);
                })
        }
    }
    return (
        <section id='login'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8">
                        <form className='loginform' onSubmit={userSubmit}>

                            {
                                isLogin ? <fieldset>
                                    <legend>Sign in</legend>
                                    <div className='form-group'>
                                        <input type="text" placeholder='username or email'
                                            onChange={(e) => setRegisterForm({ ...formData, loginName: e.target.value })}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input type="password" placeholder='password'
                                            onChange={(e) => setRegisterForm({ ...formData, password: e.target.value })}
                                        />

                                    </div>
                                    <div className='form-group'>
                                        <input type="password" placeholder='Re-type password'
                                            onChange={(e) => setRegisterForm({ ...formData, rePassword: e.target.value })}
                                        />
                                    </div>
                                    <div className='form-group'>
                                        <input type="submit" value="Login" />
                                    </div>

                                    <span className='toSignup' onClick={() => setIsLogin(false)}>or sign up</span>
                                </fieldset> :
                                    <fieldset>
                                        <legend>Sign UP</legend>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Enter Full Name'
                                                onChange={(e) => setRegisterForm({ ...registerForm, fullName: e.target.value })}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input type="text" placeholder='Enter User Name'
                                                onChange={(e) => setRegisterForm({ ...registerForm, userName: e.target.value })}
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <input type="email" placeholder='Enter Your email'
                                                onChange={(e) => setRegisterForm({ ...registerForm, userEmail: e.target.value })}
                                            />
                                        </div>
                                        <div className='form-group d-flex birthdate'>
                                            <p>Enter Birthdate : </p>
                                            <input type="date"
                                                onChange={(e) => setRegisterForm({ ...registerForm, birthdate: e.target.value })}
                                            />
                                        </div>
                                        <div className='form-group d-flex avatar'>
                                            <p>Choose Avatar : </p>
                                            <input type="file"
                                                onChange={(e) => console.log(e.target.files)}
                                            />
                                        </div>
                                        <div className='d-flex gap-3'>
                                            <div className='form-group'>
                                                <input type="password" placeholder='password'
                                                    onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <input type="password" placeholder='Re-type password'
                                                    onChange={(e) => setRegisterForm({ ...registerForm, rePassword: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <input type="submit" value="Register" />
                                        </div>

                                        <span className='toSignup'
                                            onClick={() => setIsLogin(true)}>or sign in</span>
                                    </fieldset>
                            }


                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
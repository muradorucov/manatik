import React from 'react'

function Login() {
    console.log(import.meta.env.VITE_USERS_API)
    return (
        <section id='login'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8">
                        <form className='loginform'>
                            <fieldset>
                                <legend>Sign in</legend>
                                <div className='form-group'>
                                    <input type="text" placeholder='username or email' />
                                </div>
                                <div className='form-group'>
                                    <input type="password" placeholder='password' />
                                </div>
                                <div className='form-group'>
                                    <input type="password" placeholder='Re-type password' />
                                </div>
                                <div className='form-group'>
                                    <input type="submit" value="Login" />
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
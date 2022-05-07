import React from 'react'
import { Registerbg } from '../../assets'
import './register.css'

const index = () => {
    return(
        <div >            
            <div className='cannot_scroll'>
                <div className='row'>
                    <div className='col-md-9 bg-secondary'>
                        <img  src={Registerbg} className="  full_img" alt='register pict' />
                    </div>
                    <div className=' col-md-3 bg-secondary'>
                        <h3 className='text-light text-center'>Register First</h3><hr/>
                        <form>
                            <div className="mb-1">
                                <label for="exampleInputEmail1" className="form-label text-light">Full Name</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-1">
                                <label for="exampleInputEmail1" className="form-label text-light">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label text-light">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div><br/>
                            
                            <button type="submit" className="mb-3 btn btn-primary d-grid col-12 ">Register</button><br/><br/>

                            <a className='text-light mt-3' href='/login'> <h6 className='text-center'>Kembali ke halaman Login</h6></a>
                        </form>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default index